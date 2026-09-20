'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#f9f8f7' }}>
      <Navbar />

      <section className="page-top" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 6% 80px',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>

          {/* Heading */}
          <h1 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(72px, 11vw, 140px)',
            lineHeight: '0.92',
            color: '#E63235',
            letterSpacing: '0.02em',
            marginBottom: '40px',
          }}>
            LET&apos;S<br />WORK<br />TOGETHER
          </h1>

          {/* CTA button */}
          <a
            href="mailto:johngregorymg@gmail.com"
            style={{
              display: 'flex',
              width: 'fit-content',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-bebas)',
              fontSize: '18px',
              letterSpacing: '0.12em',
              color: '#f9f8f7',
              backgroundColor: '#1A0A0A',
              borderRadius: '12px',
              padding: '14px 28px',
              textDecoration: 'none',
              marginBottom: '16px',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E63235'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1A0A0A'}
          >
            GET IN TOUCH
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          {/* Email */}
          <a href="mailto:johngregorymg@gmail.com" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(18px, 2.5vw, 32px)',
            fontWeight: '500',
            color: '#1A0A0A',
            textDecoration: 'none',
            marginBottom: '48px',
            letterSpacing: '-0.01em',
          }}>
            johngregorymg@gmail.com
          </a>

          {/* Socials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#1A0A0A',
              opacity: 0.4,
              whiteSpace: 'nowrap',
            }}>
              Find me on
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>

              {/* Instagram */}
              <a
                href="https://instagram.com/johngregorito"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#E63235', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = '#1A0A0A'}
                onMouseLeave={e => e.currentTarget.style.color = '#E63235'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>

              {/* Behance */}
              <a
                href="https://behance.net/johngregorito"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#E63235',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: '700',
                  fontSize: '18px',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#1A0A0A'}
                onMouseLeave={e => e.currentTarget.style.color = '#E63235'}
              >
                Bē
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/johnmoralesg"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#E63235', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = '#1A0A0A'}
                onMouseLeave={e => e.currentTarget.style.color = '#E63235'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
