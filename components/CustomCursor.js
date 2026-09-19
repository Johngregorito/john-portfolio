'use client';

import { useState, useEffect, useRef } from 'react';

const BASE_SIZE = 16;
const CARD_SIZE = 72;
const HIDE_SIZE = 0;

export default function CustomCursor() {
  const [pos,    setPos]    = useState({ x: -200, y: -200 });
  const [size,   setSize]   = useState(BASE_SIZE);
  const [isCard, setIsCard] = useState(false);
  const rafRef  = useRef(null);
  const pending = useRef({ x: -200, y: -200 });

  useEffect(() => {
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

        if (els.find(e => e.dataset.cursor === 'hide')) {
          setIsCard(false);
          setSize(HIDE_SIZE);
          return;
        }

        if (els.find(e => e.dataset.cursor === 'card')) {
          setIsCard(true);
          setSize(CARD_SIZE);
          return;
        }

        setIsCard(false);
        const clickable = el.tagName === 'A' || el.tagName === 'BUTTON'
          || el.closest('a') || el.closest('button');
        setSize(clickable ? 32 : BASE_SIZE);
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
  }, []);

  const base = {
    position:      'fixed',
    width:         `${size}px`,
    height:        `${size}px`,
    borderRadius:  '50%',
    pointerEvents: 'none',
    left:          pos.x,
    top:           pos.y,
    transform:     'translate(-50%, -50%)',
    transition:    'width 0.2s ease, height 0.2s ease',
  };

  return (
    <>
      {/* Layer 1 — difference blend */}
      <div data-cursor-self style={{ ...base, backgroundColor: 'white', mixBlendMode: 'difference', zIndex: 99997 }} />

      {/* Layer 2 — screen blend */}
      <div data-cursor-self style={{ ...base, backgroundColor: '#E63235', mixBlendMode: 'screen', zIndex: 99998 }} />

      {/* Eye icon — same position/size as dot, difference blend so it inverts like the dot */}
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
        opacity:        isCard ? 1 : 0,
        transition:     'opacity 0.15s ease',
      }}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </>
  );
}
