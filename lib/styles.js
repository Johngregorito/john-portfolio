// ─────────────────────────────────────────────
// Shared Design System — John Morales Portfolio
// ─────────────────────────────────────────────

// ── Typography ──────────────────────────────

export const bodyText = {
  fontFamily: 'var(--font-inter)',
  fontSize: '15px',
  fontWeight: '400',
  lineHeight: '1.85',
  color: '#1A0A0A',
};

export const labelText = {
  fontFamily: 'var(--font-inter)',
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#E63235',
};

// ── Glass card ───────────────────────────────

export const glass = {
  background: 'rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  boxShadow:
    'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.5), 0 8px 24px rgba(0, 0, 0, 0.05)',
  borderRadius: '16px',
  padding: '28px',
};

// ── Inline glass style (no padding override needed) ──
export const glassInline = (overrides = {}) => ({ ...glass, ...overrides });

// ── Divider ──────────────────────────────────

export function Divider() {
  return (
    <div style={{ width: '48px', height: '2px', backgroundColor: '#E63235', margin: '0' }} />
  );
}

// ── SplitSection ─────────────────────────────
// Two-column layout: 280px left (number + title + optional desc) / 1fr right (content)

export function SplitSection({ number, title, left, right }) {
  return (
    <section style={{ padding: '0' }}>
      <div className="container">
        <div
          className="split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: '64px',
            padding: '64px 0',
            alignItems: 'start',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={labelText}>{number}</p>
            <Divider />
            <h2
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(24px, 3vw, 36px)',
                letterSpacing: '0.06em',
                color: '#1A0A0A',
                lineHeight: '1.1',
              }}
            >
              {title}
            </h2>
            {left}
          </div>
          <div>{right}</div>
        </div>
      </div>
    </section>
  );
}

// ── Hero stat card ────────────────────────────
// Used in project hero sections for Timeline / Role / Tools etc.

export const heroStatCard = {
  background: 'rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
  boxShadow:
    'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.5), 0 8px 24px rgba(0, 0, 0, 0.05)',
  borderRadius: '16px',
  padding: '20px 24px',
};

// ── Image container (rounded, clipped) ───────

export const imageBox = {
  borderRadius: '16px',
  overflow: 'hidden',
  background: '#EDE8E1',
};

// ── Brand tokens ─────────────────────────────

export const colors = {
  red: '#E63235',
  dark: '#1A0A0A',
  bg: '#f9f8f7',
  surface: '#EDE8E1',
};
