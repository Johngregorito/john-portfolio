'use client';

import { useState, useEffect } from 'react';

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

export default function Footer() {
  const isMobile = useIsMobile();

  if (isMobile === null) return null;

  return (
    <footer style={{
      backgroundColor: '#E63235',
      borderRadius: isMobile ? '36px 36px 0 0' : '56px 56px 0 0',
      padding: isMobile ? '40px 6% 24px' : '52px 6% 32px',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        {/* Logo + Name */}
        <img
          src="/John-morales-logo-footer.svg"
          alt="John Morales"
          style={{
            height: 'clamp(48px, 6.5vw, 92px)',
            width: 'auto',
            display: 'block',
            filter: 'brightness(0) invert(1)',
            marginBottom: '28px',
          }}
        />

        {/* Social icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', marginBottom: '28px' }}>

          <a href="https://instagram.com/johngregorito" target="_blank" rel="noopener noreferrer"
            style={{ color: '#FAF6F1', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>

          <a href="https://behance.net/johngregorito" target="_blank" rel="noopener noreferrer"
            style={{ color: '#FAF6F1', transition: 'opacity 0.2s', fontWeight: '700', fontSize: '15px', letterSpacing: '0.05em', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Bē
          </a>

          <a href="https://linkedin.com/in/johnmoralesg" target="_blank" rel="noopener noreferrer"
            style={{ color: '#FAF6F1', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.25)', width: '100%', marginBottom: '20px' }} />

        {/* Copyright */}
        <p style={{
          fontSize: '13px',
          fontWeight: '500',
          letterSpacing: '0.04em',
          color: 'rgba(255,255,255,0.7)',
          textAlign: 'center',
        }}>
          © 2026 John Morales. All rights reserved. Designed with love in Utah, USA. Rooted in Venezuela.
        </p>

      </div>
    </footer>
  );
}
