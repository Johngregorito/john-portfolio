'use client';

import { useState, useEffect, useRef } from 'react';

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

const projects = [
  {
    id: 1,
    tags: ['UX/UI', 'USER RESEARCH', 'PROTOTYPING'],
    title: 'TUTORNEST',
    description: 'UX/UI DESIGN FOR A SKILL-MATCHING MOBILE APP.',
    image: '/tutornest-background.png',
    slug: 'tutornest',
    float: '/tutornest-float.png',
  },
  {
    id: 2,
    tags: ['UX/UI', 'USER RESEARCH', 'WEBSITE REDESIGN'],
    title: 'INT. PEACE GARDENS',
    description: 'WEBSITE REDESIGN FOR A CULTURALLY RICH PUBLIC SPACE.',
    image: '/ipg-background.png',
    slug: 'ipg',
    float: '/ipg-float.png',
  },
  {
    id: 3,
    tags: ['PRODUCT DESIGN', 'WEB APP', 'SHOPIFY'],
    title: 'TRUWEAR',
    description: 'PRODUCT DESIGN + BUILD: A BULK MOCKUP GENERATOR FROM SCRATCH.',
    image: '/truwear-background.png',
    slug: 'truwear',
    float: '/truwear-float.png',
  },
  {
    id: 4,
    tags: ['E-COMMERCE', 'SHOPIFY', 'CUSTOM DEVELOPMENT'],
    title: 'NO DIRT GOLF',
    description: 'STOREFRONT REDESIGN + CUSTOM PRODUCT CUSTOMIZER.',
    image: '/nodirt-background.png',
    slug: 'nodirt',
    float: '/nodirt-float.png',
  },
];

function ProjectCard({ project }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [hovered,     setHovered]     = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const cardRef  = useRef(null);
  const hasFloat = !!project.float;

  // ── Scroll: partial activation ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => setScrolled(e.intersectionRatio > 0.5)),
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '0px 0px -28% 0px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Cursor tracking for float (pushes away from cursor) ──
  const handleMouseMove = (e) => {
    if (!cardRef.current || !hasFloat) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width  - 0.5;
    const cy = (e.clientY - rect.top)  / rect.height - 0.5;
    setMouseOffset({ x: -cx * 22, y: -cy * 16 });
  };

  const handleMouseLeave = () => { setHovered(false); setMouseOffset({ x: 0, y: 0 }); };

  const bgScale        = hovered ? 0.92 : 1;
  const floatScale     = hovered ? 1.15 : scrolled ? 1.05 : 1;
  const floatTransform = `scale(${floatScale}) translate(${mouseOffset.x}px, ${mouseOffset.y}px)`;

  return (
    <div
      ref={cardRef}
      style={{ width: '100%', maxWidth: '860px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ position: 'relative' }}>
        <a href={`/work/${project.slug}`} data-cursor="card" style={{ display: 'block', textDecoration: 'none' }}>

          {/* Background — zooms out on scroll */}
          <div className="project-card" style={{
            transform:       `scale(${bgScale})`,
            transition:      'transform 0.6s ease',
            transformOrigin: 'center center',
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position:      'absolute',
              inset:          0,
              background:    hovered ? 'rgba(26, 10, 10, 0.35)' : 'transparent',
              transition:    'background 0.4s ease',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Float — zooms in on scroll + follows cursor on hover */}
          {hasFloat && (
            <div style={{
              position:      'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              clipPath:      'inset(-400px -400px -400px -400px)',
              zIndex:         2,
              pointerEvents: 'none',
            }}>
              <img
                src={project.float}
                alt=""
                aria-hidden="true"
                style={{
                  width:      '100%',
                  height:     '100%',
                  objectFit:  'cover',
                  transform:  floatTransform,
                  transition: 'transform 0.5s ease',
                }}
              />
            </div>
          )}

        </a>
      </div>

      {/* Info below card */}
      <div style={{ marginTop: '20px', padding: '0 4px' }}>
        <p style={{
          fontSize:      '12px',
          fontWeight:    '600',
          letterSpacing: '0.14em',
          color:         '#1A0A0A',
          textTransform: 'uppercase',
          marginBottom:  '8px',
        }}>
          {project.tags.join(' - ')}
        </p>
        <h3 style={{
          fontFamily:    'var(--font-bebas)',
          fontSize:      'clamp(28px, 4vw, 46px)',
          letterSpacing: '0.04em',
          lineHeight:    '1.1',
        }}>
          <span style={{ color: '#E63235' }}>{project.title}</span>
          <span style={{ color: '#1A0A0A' }}> — {project.description}</span>
        </h3>
      </div>

    </div>
  );
}

export default function WorkSection() {
  const isMobile = useIsMobile();
  return (
    <section id="work" style={{ padding: isMobile === true ? '56px 0 100px' : '100px 0 100px' }}>
      <div className="container" style={{
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        gap:           '56px',
      }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
