'use client';

import { useState, useEffect, useRef } from 'react';

const links = [
  { label: 'HOME',    href: '/' },
  { label: 'WORK',    href: '/#work' },
  { label: 'ABOUT',   href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

const glass = {
  background:           'rgba(255, 255, 255, 0.25)',
  backdropFilter:       'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  boxShadow:            'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.5), 0 8px 24px rgba(0, 0, 0, 0.05)',
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered,  setHovered]  = useState(false);
  const [open,     setOpen]     = useState(false);
  const isMobile = useIsMobile();
  const navRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (isMobile === null) return null;

  if (isMobile) {
    return (
      <nav ref={navRef} data-portrait-exit style={{ position: 'fixed', top: '28px', right: '6%', zIndex: 50 }}>
        <div
          onClick={() => setOpen(o => !o)}
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: open ? '200px' : '44px',
            height: open ? '260px' : '44px',
            borderRadius: open ? '16px' : '20px',
            transition: 'width 0.26s cubic-bezier(0.4, 0, 0.2, 1), height 0.26s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.2s ease',
            ...glass,
          }}
        >
          {/* Hamburger — fades out as pill opens */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: open ? 0 : 1,
            transition: 'opacity 0.15s ease',
            pointerEvents: 'none',
          }}>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="#1A0A0A" strokeWidth="2.8" strokeLinecap="butt">
              <line x1="0" y1="2"  x2="20" y2="2"  />
              <line x1="0" y1="7"  x2="20" y2="7"  />
              <line x1="0" y1="12" x2="20" y2="12" />
            </svg>
          </div>

          {/* Links — fade in after pill expands */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            opacity: open ? 1 : 0,
            transition: open ? 'opacity 0.15s ease 0.14s' : 'opacity 0.08s ease',
            pointerEvents: open ? 'auto' : 'none',
          }}>
            {links.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => { e.stopPropagation(); setOpen(false); }}
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '36px',
                  letterSpacing: '0.06em',
                  color: '#1A0A0A',
                  textDecoration: 'none',
                  lineHeight: '1.3',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  const compact = scrolled && !hovered;

  return (
    <nav
      data-portrait-exit
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:  'fixed',
        top:       '28px',
        left:      '50%',
        transform: 'translateX(-50%)',
        zIndex:    50,
      }}
    >
      <div style={{
        position:    'relative',
        display:     'inline-flex',
        alignItems:  'center',
        justifyContent: 'center',
        overflow:    'hidden',
        maxWidth:    compact ? '42px' : '480px',
        height:      compact ? '42px' : '44px',
        padding:     compact ? '0' : '0 26px',
        borderRadius: compact ? '20px' : '16px',
        transition:  'max-width 0.3s ease, height 0.25s ease, padding 0.25s ease, border-radius 0.25s ease',
        ...glass,
      }}>

        {/* Hamburger icon — shows when compact */}
        <svg
          width="20" height="14" viewBox="0 0 20 14"
          fill="none" stroke="#1A0A0A" strokeWidth="2.8" strokeLinecap="butt"
          style={{
            position:  'absolute',
            top:       '50%',
            left:      '50%',
            transform: compact ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)',
            opacity:   compact ? 1 : 0,
            transition:'opacity 0.25s ease, transform 0.25s ease',
            pointerEvents: 'none',
          }}
        >
          <line x1="0" y1="2"  x2="20" y2="2"  />
          <line x1="0" y1="7"  x2="20" y2="7"  />
          <line x1="0" y1="12" x2="20" y2="12" />
        </svg>

        {/* Nav links — show when full */}
        <div style={{
          display:    'inline-flex',
          alignItems: 'center',
          gap:        '22px',
          opacity:    compact ? 0 : 1,
          transform:  compact ? 'scale(0.95)' : 'scale(1)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          whiteSpace: 'nowrap',
        }}>
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily:    'var(--font-bebas)',
                fontSize:      '24px',
                color:         '#1A0A0A',
                letterSpacing: '0.06em',
                lineHeight:    '1',
                textDecoration: 'none',
                transition:    'color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#E63235'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#1A0A0A'; }}
            >
              {item.label}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}
