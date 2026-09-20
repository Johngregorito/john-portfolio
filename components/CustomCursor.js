'use client';

import { useState, useEffect, useRef } from 'react';

const BASE_SIZE     = 16;
const CARD_SIZE     = 72;
const PORTRAIT_SIZE = 125;
const HIDE_SIZE     = 0;

export default function CustomCursor() {
  const [pos,        setPos]        = useState({ x: -200, y: -200 });
  const [size,       setSize]       = useState(BASE_SIZE);
  const [cursorType, setCursorType] = useState(null);
  const [isTouch,    setIsTouch]    = useState(false);
  // Skeleton background: position + size computed in the RAF as plain numbers,
  // so there are no CSS-var or inline-style parsing issues.
  const [portraitBg, setPortraitBg] = useState({ x: 0, y: 0, w: 0, h: 0 });

  const rafRef         = useRef(null);
  const pending        = useRef({ x: -200, y: -200 });
  const portraitCanvas = useRef(null); // lazy canvas for pixel-accurate detection

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e) => {
      pending.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const { x, y } = pending.current;
        setPos({ x, y });

        const els = document.elementsFromPoint(x, y);
        const el  = els.find(e => !e.hasAttribute('data-cursor-self'));
        if (!el) return;

        const cursor = el.closest('[data-cursor]')?.dataset.cursor;

        let newType = null;
        let newSize = BASE_SIZE;

        // Lazy-build a canvas snapshot of the portrait image so we can read
        // individual pixel alpha values — this gives pixel-accurate boundary
        // detection even though the image has transparent areas inside its rect.
        if (!portraitCanvas.current) {
          const imgEl = document.querySelector('[data-cursor="portrait"] img');
          if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
            try {
              const c = document.createElement('canvas');
              c.width  = imgEl.naturalWidth;
              c.height = imgEl.naturalHeight;
              const ctx = c.getContext('2d');
              ctx.drawImage(imgEl, 0, 0);
              portraitCanvas.current = { ctx, nw: imgEl.naturalWidth, nh: imgEl.naturalHeight };
            } catch (_) { /* CORS guard — fall back to rect-only */ }
          }
        }

        // Returns true when viewport point (px,py) is over an opaque portrait pixel.
        const isOpaquePortrait = (px, py) => {
          const pr = window.__portraitRect;
          const cv = portraitCanvas.current;
          if (!pr || pr.width === 0) return false;
          if (cv) {
            // Pixel-accurate: map viewport → image coordinates
            const ix = Math.round((px - pr.left) / pr.width  * cv.nw);
            const iy = Math.round((py - pr.top)  / pr.height * cv.nh);
            if (ix < 0 || ix >= cv.nw || iy < 0 || iy >= cv.nh) return false;
            try { return cv.ctx.getImageData(ix, iy, 1, 1).data[3] > 30; } catch (_) { /* fall through */ }
          }
          // Fallback: rect-only (used before canvas is ready)
          return px >= pr.left && px <= pr.left + pr.width &&
                 py >= pr.top  && py <= pr.top  + pr.height;
        };

        const r8 = BASE_SIZE / 2;
        let portraitActive =
          isOpaquePortrait(x,      y     ) ||
          isOpaquePortrait(x + r8, y     ) ||
          isOpaquePortrait(x - r8, y     ) ||
          isOpaquePortrait(x,      y + r8) ||
          isOpaquePortrait(x,      y - r8);

        // When big circle is active, check if its visual edge (PORTRAIT_SIZE/2)
        // overlaps a portrait-exit zone. Only the topmost element at each edge
        // point is tested — checking every stacked element causes false positives
        // because `closest` would traverse up through unrelated wide containers.
        if (portraitActive) {
          const R = PORTRAIT_SIZE / 2;
          const D = R * 0.707;
          const exitHit = [
            [x + R, y], [x - R, y], [x, y + R], [x, y - R],
            [x + D, y + D], [x - D, y + D], [x + D, y - D], [x - D, y - D],
          ].some(([px, py]) => {
            const pts = document.elementsFromPoint(px, py);
            const top = pts.find(e => !e.hasAttribute('data-cursor-self'));
            return !!top?.closest?.('[data-portrait-exit]');
          });
          if (exitHit) portraitActive = false;
        }

        if (cursor === 'hide') {
          newSize = HIDE_SIZE;
        } else if (portraitActive) {
          newType = 'portrait';
          newSize = PORTRAIT_SIZE;
          const pr = window.__portraitRect;
          if (pr) {
            const half = PORTRAIT_SIZE / 2;
            setPortraitBg({ x: pr.left - x + half, y: pr.top - y + half, w: pr.width, h: pr.height });
          }
        } else if (cursor === 'card') {
          newType = 'card';
          newSize = CARD_SIZE;
        } else if (cursor === 'photo-switch') {
          newType = 'switch';
          newSize = CARD_SIZE;
        } else {
          const clickable = el.tagName === 'A' || el.tagName === 'BUTTON'
            || el.closest('a') || el.closest('button');
          newSize = clickable ? 32 : BASE_SIZE;
        }

        setCursorType(newType);
        setSize(newSize);
      });
    };

    const onLeave = () => setPos({ x: -200, y: -200 });

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isTouch]);

  if (isTouch) return null;

  const isPortrait     = cursorType === 'portrait';
  const showIcon       = cursorType === 'card' || cursorType === 'switch';
  const sizeTransition    = 'width 0.2s ease, height 0.2s ease';
  const skeletonTransition = 'width 0.2s ease, height 0.2s ease, opacity 0.15s ease';

  const base = {
    position:      'fixed',
    width:         `${size}px`,
    height:        `${size}px`,
    borderRadius:  '50%',
    pointerEvents: 'none',
    left:          pos.x,
    top:           pos.y,
    transform:     'translate(-50%, -50%)',
    transition:    sizeTransition,
  };

  return (
    <>
      {/* Skeleton sits BELOW the blend modes. White background blocks the portrait
          so it never shows through the cursor circle. The skeleton image renders
          on top; the blend modes then invert the skeleton colours. */}
      <div data-cursor-self style={{
        ...base,
        zIndex:             99996,
        opacity:            isPortrait ? 1 : 0,
        backgroundColor:    'white',
        backgroundImage:    isPortrait ? 'url(/portrait-skeleton.png)' : 'none',
        backgroundRepeat:   'no-repeat',
        backgroundSize:     `${portraitBg.w}px ${portraitBg.h}px`,
        backgroundPosition: `${portraitBg.x}px ${portraitBg.y}px`,
      }} />

      {/* Blend mode layers — identical to every other cursor state */}
      <div data-cursor-self style={{ ...base, backgroundColor: 'white', mixBlendMode: 'difference', zIndex: 99997 }} />
      <div data-cursor-self style={{ ...base, backgroundColor: '#E63235', mixBlendMode: 'screen', zIndex: 99998 }} />

      {/* Icon — card / switch modes */}
      <div data-cursor-self style={{
        position:       'fixed',
        width:          `${size}px`,
        height:         `${size}px`,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        pointerEvents:  'none',
        zIndex:         99999,
        left:           pos.x,
        top:            pos.y,
        transform:      'translate(-50%, -50%)',
        mixBlendMode:   'difference',
        opacity:        showIcon ? 1 : 0,
        transition:     'opacity 0.15s ease',
      }}>
        {cursorType === 'switch' ? (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="17 1 21 5 17 9"/>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
            <polyline points="7 23 3 19 7 15"/>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        )}
      </div>

    </>
  );
}
