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


        </div>
      </section>

      <Footer />
    </main>
  );
}
