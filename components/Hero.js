'use client';

import { useState, useRef, useEffect } from 'react';

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

function CircularText() {
  const text = 'UX/UI DESIGNER · GRAPHIC DESIGNER · WEB DESIGNER · CREATIVE · ';
  const wrapperRef = useRef(null);
  const prevDistRef = useRef(999);
  const fromOutsideRef = useRef(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [snap, setSnap] = useState(false);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const prev = prevDistRef.current;

    if (prev > 140 && dist <= 140) fromOutsideRef.current = true;
    if (dist < 65) fromOutsideRef.current = false;

    prevDistRef.current = dist;

    if (dist < 65 || dist > 140 || !fromOutsideRef.current) {
      setSnap(true);
      setOffset({ x: 0, y: 0 });
      return;
    }

    const strength = 22;
    setSnap(false);
    setOffset({ x: -(dx / dist) * strength, y: -(dy / dist) * strength });
  };

  const handleMouseLeave = () => {
    fromOutsideRef.current = false;
    prevDistRef.current = 999;
    setSnap(true);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'absolute',
        top: '12%',
        right: '5%',
        zIndex: 4,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: snap
          ? 'transform 1.6s cubic-bezier(0.2, 2.2, 0.3, 1)'
          : 'transform 0.18s ease-out',
      }}
    >
      <svg
        viewBox="0 0 240 240"
        width="240"
        height="240"
        className="circular-text"
      >
        <defs>
          <path
            id="circle-path"
            d="M 120,120 m -95,0 a 95,95 0 1,1 190,0 a 95,95 0 1,1 -190,0"
          />
        </defs>
        <text fontSize="13" fontWeight="700" fill="#1A0A0A">
          <textPath href="#circle-path" textLength="588" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'visible',
      display: 'flex',
      alignItems: isMobile ? 'flex-start' : 'center',
      padding: isMobile ? '80px 6% 0' : '0 6%',
    }}>

      {/* Portrait */}
      {isMobile !== null && (
        <div style={isMobile
          ? { position: 'absolute', bottom: 0, right: 0, height: '450px', zIndex: 1 }
          : { position: 'absolute', right: '6%', top: '0', height: '110%', zIndex: 1 }
        }>
          <img
            src="/portrait.png"
            alt="John Morales"
            style={{ height: '100%', width: 'auto', display: 'block' }}
          />
        </div>
      )}

      {/* Name + tagline */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: isMobile ? '100%' : '45%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: isMobile ? '0' : '-80px',
      }}>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '20px',
          fontWeight: '800',
          letterSpacing: '0.12em',
          color: '#E63235',
          textTransform: 'uppercase',
        }}>
          Hello, I'm
        </p>

        <h1 style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(72px, 12vw, 160px)',
          lineHeight: '0.92',
          color: '#1A0A0A',
          letterSpacing: '0.02em',
        }}>
          JOHN<br />MORALES
        </h1>

        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '1.7',
          color: '#1A0A0A',
          textTransform: 'uppercase',
          textAlign: 'justify',
          textAlignLast: 'justify',
          width: '100%',
        }}>
          Multidisciplinary designer who turns ideas into visuals and products that connect with real needs.
        </p>
      </div>

      {/* Circular rotating text — sits on top of portrait */}
      {isMobile === false && <CircularText />}

      {/* Explore My Work — centered */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '0',
        right: '0',
        zIndex: 2,
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(44px, 8vw, 110px)',
          color: '#E63235',
          letterSpacing: '0.04em',
          lineHeight: '1',
        }}>
          EXPLORE MY WORK
        </h2>
      </div>

    </section>
  );
}
