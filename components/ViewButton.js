'use client';

export default function ViewButton({ href, children }) {
  return (
    <a href={href} className="view-btn">
      {children}
    </a>
  );
}
