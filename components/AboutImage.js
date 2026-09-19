'use client';
import { useState, useRef, useEffect } from 'react';

const DOT_RADIUS = 55;

export default function AboutImage() {
  const [hovered, setHovered] = useState(false);
  const [growing, setGrowing] = useState(false);
  const [pos, setPos]         = useState({ x: 0, y: 0 });
  const containerRef          = useRef(null);
  const timerRef              = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleMouseEnter = (e) => {
    if (containerRef.current) {
      const r = containerRef.current.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    }
    setHovered(true);
    setGrowing(true);
    timerRef.current = setTimeout(() => setGrowing(false), 220);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setGrowing(false);
    clearTimeout(timerRef.current);
  };

  const clipPath       = `circle(${hovered ? DOT_RADIUS : 0}px at ${pos.x}px ${pos.y}px)`;
  const clipTransition = (growing || !hovered) ? 'clip-path 0.2s ease' : 'none';
  const dotSize        = hovered ? DOT_RADIUS * 2 : 0;

  const dotBase = {
    position:      'absolute',
    left:           pos.x,
    top:            pos.y,
    width:          dotSize,
    height:         dotSize,
    borderRadius:  '50%',
    transform:     'translate(-50%, -50%)',
    transition:    'width 0.2s ease, height 0.2s ease',
    pointerEvents: 'none',
    zIndex:         2,
  };

  return (
    // Outer wrapper — position:relative but NO overflow:hidden so dot can spill out
    <div
      ref={containerRef}
      data-cursor="hide"
      style={{ position: 'relative', cursor: 'none' }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image container — overflow:hidden only here for border-radius + clip-path */}
      <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
        <img
          src="/About-pic.jpg"
          alt="John Morales"
          style={{ width: '100%', display: 'block' }}
        />
        <img
          src="/About-pic-behind.png"
          alt=""
          aria-hidden="true"
          style={{
            position:       'absolute',
            inset:           0,
            width:          '100%',
            height:         '100%',
            objectFit:      'cover',
            clipPath,
            WebkitClipPath:  clipPath,
            transition:      clipTransition,
            pointerEvents:  'none',
          }}
        />
      </div>

      {/* Dot layers — outside overflow:hidden, free to spill beyond image edge */}
      <div style={{ ...dotBase, backgroundColor: 'white',    mixBlendMode: 'difference' }} />
      <div style={{ ...dotBase, backgroundColor: '#E63235',  mixBlendMode: 'screen'     }} />
    </div>
  );
}
