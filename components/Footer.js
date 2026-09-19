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

const links = [
  { label: 'HOME',    href: '/' },
  { label: 'WORK',    href: '/#work' },
  { label: 'ABOUT',   href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Footer() {
  const isMobile = useIsMobile();

  if (isMobile === null) return null;

  return (
    <footer style={{ backgroundColor: '#E63235', padding: '28px 6% 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Top row — name + nav */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          marginBottom: '28px',
          gap: isMobile ? '20px' : '0',
        }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1.4vw, 18px)' }}>
            <img
              src="/logo.svg"
              alt="John Morales"
              style={{ height: 'clamp(40px, 5.2vw, 78px)', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
            />
            <p style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(22px, 3.1vw, 46px)',
              letterSpacing: '0.04em',
              lineHeight: '0.9',
              color: '#FAF6F1',
            }}>
              JOHN<br />MORALES
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '8px 24px' : '12px',
          }}>
            {links.map(item => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '22px',
                  letterSpacing: '0.08em',
                  color: '#FAF6F1',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.55'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.25)', marginBottom: '16px' }} />

        {/* Bottom row — socials + copyright */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          gap: isMobile ? '16px' : '0',
        }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>

            <a href="https://instagram.com/johngregorito" target="_blank" rel="noopener noreferrer"
              style={{ color: '#FAF6F1', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.55'}
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
              onMouseEnter={e => e.currentTarget.style.opacity = '0.55'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Bē
            </a>

            <a href="https://linkedin.com/in/johnmoralesg" target="_blank" rel="noopener noreferrer"
              style={{ color: '#FAF6F1', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.55'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

          </div>

          <p style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)' }}>
            © 2026 John Morales. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
