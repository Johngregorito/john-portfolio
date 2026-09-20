'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhotoStack from '@/components/PhotoStack';
import { bodyText } from '@/lib/styles';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const h = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);
  return isMobile;
}

const photos = [
  { src: '/About-pic.jpg',      alt: 'John Morales' },
  { src: '/About-pic-baby.jpg', alt: 'John Morales, early years' },
];

const bioText = [
  'John Morales is a designer currently based in Utah, United States. Born and raised in Venezuela, his passion for design began through visual communication and a fascination with how people interact with ideas, products, and experiences.',
  "His foundation in graphic design was established in Venezuela, where he earned a Bachelor's degree in Graphic Design. After moving to the United States, he expanded his practice through the University of Utah's UX/UI Design program, bridging traditional design principles with digital product experiences.",
  'Currently, he leads Webstores, Product, and Design Operations at Truwear, where he oversees the development of e-commerce platforms, internal systems, client storefronts, and digital product initiatives. His work spans product design, UX/UI, branding, e-commerce, photography, and creative direction.',
  "Today, he lives and works in Utah. Outside of work, you'll usually find him exploring photography, refining creative projects, learning new skills, or searching for the perfect cup of coffee.",
];

// Swipeable stacked-card photo block for mobile
function MobilePhotoStack() {
  const [frontIndex, setFrontIndex] = useState(0);
  const [animating,  setAnimating]  = useState(false);
  const touchStartX = useRef(null);

  const switchPhoto = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setFrontIndex(i => 1 - i);
      setAnimating(false);
    }, 180);
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 36) switchPhoto();
    touchStartX.current = null;
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}
    >
      {photos.map((photo, i) => {
        const isFront = i === frontIndex;
        return (
          <div
            key={photo.src}
            style={{
              position:     'absolute',
              inset:        0,
              borderRadius: '20px',
              overflow:     'hidden',
              boxShadow:    isFront
                ? '0 24px 64px rgba(0,0,0,0.22)'
                : '0 12px 36px rgba(0,0,0,0.1)',
              transform:    isFront
                ? animating ? 'scale(0.97)' : 'translate(0,0)'
                : 'rotate(-5deg) translate(-14px, 22px)',
              zIndex:       isFront ? 2 : 1,
              transition:   'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease',
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        );
      })}

      {/* Swipe hint dots */}
      <div style={{
        position:        'absolute',
        bottom:          '-24px',
        left:            '50%',
        transform:       'translateX(-50%)',
        display:         'flex',
        gap:             '6px',
        alignItems:      'center',
      }}>
        {photos.map((_, i) => (
          <div key={i} style={{
            width:           i === frontIndex ? '20px' : '6px',
            height:          '6px',
            borderRadius:    '3px',
            backgroundColor: '#1A0A0A',
            opacity:         i === frontIndex ? 0.7 : 0.2,
            transition:      'width 0.3s ease, opacity 0.3s ease',
          }} />
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const isMobile = useIsMobile();

  return (
    <main style={{ backgroundColor: '#f9f8f7' }}>
      <Navbar />

      {isMobile === null ? null : isMobile ? (

        /* ── MOBILE ── */
        <div style={{ padding: '100px 6% 80px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h1 style={{
            fontFamily:    'var(--font-bebas)',
            fontSize:      'clamp(64px, 16vw, 90px)',
            lineHeight:    '0.9',
            color:         '#E63235',
            letterSpacing: '0.02em',
          }}>
            ABOUT
          </h1>

          {bioText.map((text, i) => (
            <p key={i} style={bodyText}>{text}</p>
          ))}

          {/* Photos below the text, with extra top margin for the dots */}
          <div style={{ marginTop: '16px', paddingBottom: '32px' }}>
            <MobilePhotoStack />
          </div>
        </div>

      ) : (

        /* ── DESKTOP (unchanged) ── */
        <section className="page-top" style={{ padding: '120px 0 100px' }}>
          <div className="container">
            <div className="about-grid" style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '80px',
              alignItems:         'start',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <h1 style={{
                  fontFamily:    'var(--font-bebas)',
                  fontSize:      'clamp(72px, 11vw, 140px)',
                  lineHeight:    '0.9',
                  color:         '#E63235',
                  letterSpacing: '0.02em',
                }}>
                  ABOUT
                </h1>
                {bioText.map((text, i) => (
                  <p key={i} style={bodyText}>{text}</p>
                ))}
              </div>
              <PhotoStack />
            </div>
          </div>
        </section>

      )}

      <Footer />
    </main>
  );
}
