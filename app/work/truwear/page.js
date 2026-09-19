import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { bodyText, labelText, glass, Divider, SplitSection } from '@/lib/styles';

export const metadata = {
  title: 'Truwear Mockup Generator | John Morales',
  description: 'Product design case study: Truwear Mockup Generator.',
};

export default function TruwearPage() {
  return (
    <main style={{ backgroundColor: '#f9f8f7' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ padding: '120px 0 0' }}>
        <div className="container">
          <div className="hero-project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '64px', alignItems: 'center' }}>

            {/* Left */}
            <div>
              <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(72px, 11vw, 140px)', lineHeight: '0.9', color: '#E63235', letterSpacing: '0.02em', marginBottom: '16px' }}>
                TRUWEAR<br />MOCKUP GENERATOR
              </h1>
              <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(22px, 3vw, 36px)', letterSpacing: '0.1em', color: '#1A0A0A', marginBottom: '48px' }}>
                PRODUCT DESIGN & WEB APP
              </h2>
              <div className="mobile-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                {[
                  { value: 'Designer + Builder', label: 'My Role' },
                  { value: 'Shopify App',         label: 'Type' },
                  { value: '3 Days',              label: 'Timeline' },
                  { value: 'In Use',              label: 'Status' },
                ].map((s, i) => (
                  <div key={i} style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.5), 0 8px 24px rgba(0, 0, 0, 0.05)', borderRadius: '16px', padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '18px', letterSpacing: '0.06em', color: '#1A0A0A', marginBottom: '4px' }}>{s.value}</p>
                    <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — static card */}
            <div className="hero-project-image" style={{ position: 'relative', height: '420px', borderRadius: '28px', overflow: 'hidden' }}>
              <img src="/truwear-background.png" alt="Truwear Mockup Generator" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <img src="/truwear-float.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

          </div>
        </div>
      </section>

      {/* ── 01 OVERVIEW ── */}
      <SplitSection
        number="01"
        title="PROJECT OVERVIEW"
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={bodyText}>
              Truwear is a corporate apparel brand with a large Shopify catalog. Every time a client wanted to see their logo on a garment, a designer had to manually open Figma, place the logo, adjust sizing, export, and repeat, for every product, every colorway. It was slow, it blocked the sales team, and it didn't scale.
            </p>
            <p style={bodyText}>
              The raw materials were all there: product photography, a live Shopify catalog, a repeatable workflow. What was missing was a tool that connected them. So I built one: a bulk mockup generator that lets anyone on the team go from logo upload to downloadable mockups in seconds.
            </p>
          </div>
        }
      />

      {/* ── 02 THE PROBLEM ── */}
      <SplitSection
        number="02"
        title="THE PROBLEM"
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                tag: 'Bottleneck',
                title: 'Everything went through a designer',
                body: 'Sales reps couldn\'t generate mockups on their own. Every client request created a queue and constant context-switching for the design team.',
              },
              {
                tag: 'Time Cost',
                title: 'Repetitive work eating into design hours',
                body: 'One logo placement takes 2 minutes. Across 10 colorways and 5 garments for a single pitch, that\'s hours of mechanical work with zero creative value.',
              },
              {
                tag: 'Catalog Sync',
                title: 'No connection to the live product catalog',
                body: 'Designers maintained separate asset libraries that went stale quickly. New products on Shopify weren\'t automatically available for mockups.',
              },
              {
                tag: 'Sales Impact',
                title: 'Slow turnaround hurt deals',
                body: 'Clients asking to see their logo on a specific product had to wait hours. In a sales context, that friction costs momentum.',
              },
            ].map((issue, i) => (
              <div key={i} style={glass}>
                <p style={{ ...labelText, marginBottom: '8px' }}>{issue.tag}</p>
                <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '18px', letterSpacing: '0.06em', color: '#1A0A0A', marginBottom: '10px' }}>
                  {issue.title}
                </h4>
                <p style={{ ...bodyText, fontSize: '13px' }}>{issue.body}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 03 WHO I DESIGNED FOR ── */}
      <SplitSection
        number="03"
        title="WHO I DESIGNED FOR"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            Three user types with very different technical comfort levels and goals: one tool that had to work for all of them.
          </p>
        }
        right={
          <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              {
                role: 'Designer',
                need: 'Create placement templates once and reuse them across every product. Full control over logo positioning.',
                pain: 'Was manually placing logos in Figma for every client, every product, every colorway.',
              },
              {
                role: 'Sales Rep',
                need: 'Generate a full mockup set before or during a client call, without needing a designer in the loop.',
                pain: 'Was waiting hours for files, losing momentum in the sales conversation.',
              },
              {
                role: 'Client',
                need: 'See their logo on actual products quickly enough to make a decision.',
                pain: 'Was getting a delayed email with a handful of static images and no easy way to explore other options.',
              },
            ].map((user, i) => (
              <div key={i} style={glass}>
                <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.06em', color: '#1A0A0A', marginBottom: '16px' }}>
                  {user.role}
                </h4>
                <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '4px' }}>Needs</p>
                <p style={{ ...bodyText, fontSize: '13px', marginBottom: '12px' }}>{user.need}</p>
                <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '4px' }}>Was doing</p>
                <p style={{ ...bodyText, fontSize: '13px' }}>{user.pain}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 04 THE SOLUTION ── */}
      <SplitSection
        number="04"
        title="THE SOLUTION"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            Pull the full catalog live from Shopify, let designers define placement zones once, then let anyone generate and download mockups in bulk.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                title: 'Shopify Integration',
                body: 'Built a custom Shopify app that pulls all product data, images, variants, names, directly from the store. New products appear in the tool automatically. No manual syncing.',
                action: 'Custom Shopify app + API auth',
              },
              {
                title: 'Template Creation',
                body: 'Designers drag a placement box over the product image, size it, name it, and save. That template is instantly shared with the whole team: define it once, use it everywhere.',
                action: 'Templates shared with the team in real time',
              },
              {
                title: 'Catalog Sets',
                body: 'Individual product selection for control, or pre-built catalogs (Truwear Basics: 49 products, Collegiate Catalog: 60 products) for speed. Pick a catalog, upload a logo, generate.',
                action: 'Catalogs for speed, individual selection for precision',
              },
              {
                title: 'Bulk Generation + Download',
                body: 'Drop a logo into the upload zone, hit generate. The tool applies it to every selected product using the saved templates and renders the full set. Download everything at once or grab individual files.',
                action: 'Bulk + individual download both available',
              },
            ].map((step, i) => (
              <div key={i} className="solution-row" style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '32px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.5), 0 8px 24px rgba(0, 0, 0, 0.05)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '22px', letterSpacing: '0.06em', color: '#1A0A0A' }}>{step.title}</h4>
                  <p style={bodyText}>{step.body}</p>
                </div>
                <p className="solution-action" style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', color: '#E63235', textAlign: 'left' }}>→ {step.action}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 05 THE PRODUCT ── */}
      <SplitSection
        number="05"
        title="THE PRODUCT"
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '8px' }}>Products View</p>
              <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                <img src="/truwear-products.png" alt="Products view" style={{ width: '100%', display: 'block' }} />
              </div>
              <p style={{ ...bodyText, fontSize: '13px', marginTop: '10px', opacity: 0.7 }}>
                Full Shopify catalog in a filterable grid. The right panel stays persistent: selected products, logo upload, and the template library are always accessible without losing context.
              </p>
            </div>
            <div>
              <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '8px' }}>Catalogs View</p>
              <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                <img src="/truwear-catalogs.png" alt="Catalogs view" style={{ width: '100%', display: 'block' }} />
              </div>
              <p style={{ ...bodyText, fontSize: '13px', marginTop: '10px', opacity: 0.7 }}>
                Pre-built product sets with one-click generation. Sales reps can have a full client deck ready before a call ends.
              </p>
            </div>
            <div>
              <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '8px' }}>Template Creation</p>
              <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                <img src="/truwear-template.png" alt="Template creation" style={{ width: '100%', display: 'block' }} />
              </div>
              <p style={{ ...bodyText, fontSize: '13px', marginTop: '10px', opacity: 0.7 }}>
                Drag the box, size it, name it, save. That template is live for the entire team immediately.
              </p>
            </div>
            <div>
              <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '8px' }}>Generated Output</p>
              <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                <img src="/truwear-output.png" alt="Generated mockups output" style={{ width: '100%', display: 'block' }} />
              </div>
              <p style={{ ...bodyText, fontSize: '13px', marginTop: '10px', opacity: 0.7 }}>
                All colorways, logo placed correctly, ready to download. What used to take 20–40 minutes per client request now takes seconds.
              </p>
            </div>
          </div>
        }
      />

      {/* ── 06 REFLECTION ── */}
      <SplitSection
        number="06"
        title="REFLECTION"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            No user interviews, no affinity maps. What made it work was a different kind of design thinking: see the workflow problem clearly, design around the real constraints, and ship.
          </p>
        }
        right={
          <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={glass}>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '12px' }}>WHAT MADE THIS WORK</h3>
              <p style={{ ...bodyText, fontSize: '14px' }}>Separating "setup" from "generate" was the key decision. Designers define templates once, everyone else just uses them. The complexity is invisible.</p>
            </div>
            <div style={glass}>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '12px' }}>WHAT'S NEXT</h3>
              <p style={{ ...bodyText, fontSize: '14px' }}>The logical next step is auto-detecting logo placement areas from the product image, so new items get suggested zones automatically and setup overhead drops to near zero.</p>
            </div>
            <div style={glass}>
              <p style={{ ...labelText, marginBottom: '8px' }}>Still Ahead</p>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '12px' }}>REDUCE FRICTION END TO END</h3>
              <p style={{ ...bodyText, fontSize: '14px' }}>Auto-detect logo placement zones on new products, and let sales reps send clients a shareable link to preview and download mockups directly, removing manual steps on both ends.</p>
            </div>
            <div style={glass}>
              <p style={{ ...labelText, marginBottom: '8px' }}>Still Ahead</p>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '12px' }}>USAGE ANALYTICS</h3>
              <p style={{ ...bodyText, fontSize: '14px' }}>Track which products get mocked up most, giving the brand a clear signal on what clients are actually interested in and where to focus catalog growth.</p>
            </div>
          </div>
        }
      />

      <div style={{ paddingBottom: '80px' }} />
      <Footer />
    </main>
  );
}
