'use client';
import { useState, useRef } from 'react';

const photos = [
  { src: '/About-pic.jpg',      alt: 'John Morales' },
  { src: '/About-pic-baby.jpg', alt: 'John Morales, early years' },
];

export default function PhotoStack() {
  const [frontIndex, setFrontIndex] = useState(0);
  const [hovered,    setHovered]    = useState(false);
  const [mouse,      setMouse]      = useState({ x: 0, y: 0 });
  const containerRef                = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width  - 0.5;
    const cy = (e.clientY - rect.top)  / rect.height - 0.5;
    setMouse({ x: cx * 14, y: cy * 10 });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setMouse({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      data-cursor="photo-switch"
      style={{ position: 'relative', aspectRatio: '4/5', width: '100%' }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setFrontIndex(i => 1 - i)}
    >
      {photos.map((photo, i) => {
        const isFront = i === frontIndex;

        const transform = isFront
          ? hovered
            ? `translate(${mouse.x}px, ${mouse.y - 10}px)`
            : 'translate(0px, 0px)'
          : hovered
            ? `rotate(-6deg) translate(${-14 + mouse.x * 0.4}px, ${22 + mouse.y * 0.35}px)`
            : 'rotate(-5deg) translate(-14px, 22px)';

        return (
          <div
            key={photo.src}
            style={{
              position:     'absolute',
              inset:         0,
              borderRadius: '20px',
              overflow:     'hidden',
              boxShadow:    isFront
                ? hovered
                  ? '0 32px 80px rgba(0,0,0,0.28)'
                  : '0 24px 64px rgba(0,0,0,0.2)'
                : '0 12px 36px rgba(0,0,0,0.1)',
              transform,
              zIndex:     isFront ? 2 : 1,
              transition: hovered
                ? 'transform 0.15s ease, box-shadow 0.3s ease'
                : 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease',
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
    </div>
  );
}
