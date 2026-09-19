import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { bodyText, labelText, glass, Divider, SplitSection } from '@/lib/styles';

export const metadata = {
  title: 'No Dirt Golf | John Morales',
  description: 'E-commerce redesign case study: No Dirt Golf Shopify storefront + custom product customizer.',
};

export default function NoDirtPage() {
  return (
    <main style={{ backgroundColor: '#f9f8f7' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="page-top" style={{ padding: '120px 0 0' }}>
        <div className="container">
          <div className="hero-project-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '64px', alignItems: 'center' }}>

            {/* Left */}
            <div>
              <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(72px, 11vw, 140px)', lineHeight: '0.9', color: '#E63235', letterSpacing: '0.02em', marginBottom: '16px' }}>
                NO DIRT GOLF
              </h1>
              <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(22px, 3vw, 36px)', letterSpacing: '0.1em', color: '#1A0A0A', marginBottom: '48px' }}>
                WEBSTORE REDESIGN
              </h2>
              <div className="mobile-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                {[
                  { value: 'Designer + Developer', label: 'My Role' },
                  { value: 'E-Commerce Redesign',  label: 'Type' },
                  { value: 'Shopify (Liquid)',      label: 'Platform' },
                  { value: 'Launched',             label: 'Status' },
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
              <img src="/nodirt-background.jpg" alt="No Dirt Golf" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <img src="/nodirt-float.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
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
              No Dirt Golf makes microfiber golf towels built for performance: high quality, designed to turn heads on the course. With a new collection ready to launch and paid ads coming, they needed a store that could actually convert the traffic they were about to drive to it. The existing site wasn't built for that.
            </p>
            <p style={bodyText}>
              The project had two parts: a full Shopify storefront redesign focused on conversion, and the design and development of a brand new feature: a custom product configurator that lets customers upload their logo or add custom text directly on the product page.
            </p>
            <div>
              <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '10px' }}>Redesigned Homepage</p>
              <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                <img src="/nodirt-homepage.jpg" alt="Redesigned No Dirt Golf site" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>
        }
      />

      {/* ── 02 THE PROBLEM ── */}
      <SplitSection
        number="02"
        title="THE PROBLEM"
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={bodyText}>
              The site wasn't failing for one reason: it was failing for several interconnected ones. All pointing to the same root cause: the design was getting in the way of the product.
            </p>
            {[
              {
                tag: 'Visual Clutter',
                title: 'Too many things competing for attention',
                body: 'Rotating banners, competing CTAs, and too many content blocks pulling the eye in different directions. Nothing was clearly the most important thing on the page.',
              },
              {
                tag: 'Off-topic Content',
                title: 'Sections that didn\'t support the purchase',
                body: 'Prime real estate was occupied by content that didn\'t help users understand the product, trust the brand, or decide to buy.',
              },
              {
                tag: 'Friction',
                title: 'Broken conversion path',
                body: 'Navigation wasn\'t clear, the product wasn\'t prominent above the fold, and there were no trust signals near where purchase decisions get made.',
              },
              {
                tag: 'Missed Opportunity',
                title: 'No way to personalize',
                body: 'A product that naturally lends itself to branded and gifted use cases had no customization option, leaving corporate, gifting, and team segments completely unaddressed.',
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

      {/* ── 03 RESEARCH & DIRECTION ── */}
      <SplitSection
        number="03"
        title="RESEARCH & DIRECTION"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            No formal interviews. The research came from the store's own data: analytics, abandoned carts, and a competitive audit of where premium golf brands were setting the bar.
          </p>
        }
        right={
          <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              {
                tag: 'Shopify Analytics',
                title: 'High bounce, low time-on-page',
                body: 'Most sessions were ending on the homepage. Visitors weren\'t scrolling far enough to reach the product grid, signaling the above-the-fold experience wasn\'t earning attention.',
              },
              {
                tag: 'Abandoned Cart Data',
                title: 'Drop-off before checkout was significant',
                body: 'Cart abandonment rates pointed to friction in the purchase path: unclear product value, no trust signals near the buy button, and no reason to act urgently.',
              },
              {
                tag: 'Funnel Analysis',
                title: 'Add-to-cart rate was the bottleneck',
                body: 'Checkout completion from cart was reasonable. The real problem was getting visitors to add anything at all. The product page and collection weren\'t doing enough to convert intent.',
              },
              {
                tag: 'Competitive Audit',
                title: 'Premium golf brands were setting a different standard',
                body: 'Clean single-hero layouts, strong product photography, tight value propositions above the fold. No Dirt\'s store wasn\'t competing visually with the premium segment it was trying to occupy.',
              },
            ].map((item, i) => (
              <div key={i} style={glass}>
                <p style={{ ...labelText, marginBottom: '8px' }}>{item.tag}</p>
                <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '18px', letterSpacing: '0.06em', color: '#1A0A0A', marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ ...bodyText, fontSize: '13px' }}>{item.body}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 04 WIREFRAMES ── */}
      <SplitSection
        number="04"
        title="WIREFRAMES & IDEATION"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            Low-fidelity first: the goal was to decide what the site needed to contain and in what order, before any visual decisions were made.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="mobile-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {[
                { src: '/nodirt-wireframe-1.png', label: 'Homepage: hero, trust bar, best sellers' },
                { src: '/nodirt-wireframe-2.png', label: 'New colors section + feature banner' },
                { src: '/nodirt-wireframe-3.png', label: 'Why No-Dirt features + reviews' },
                { src: '/nodirt-wireframe-4.png', label: 'Design Your Own: customizer layout' },
              ].map((wf, i) => (
                <div key={i}>
                  <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '8px' }}>{wf.label}</p>
                  <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                    <img src={wf.src} alt={wf.label} style={{ width: '100%', display: 'block' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />


      {/* ── 05 DESIGN & BUILD ── */}
      <SplitSection
        number="05"
        title="DESIGN & BUILD"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            Built directly in Shopify Liquid: full control over layout, component behavior, and the custom feature integration.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  title: 'Hero: One Message, One Moment',
                  body: 'Single full-bleed photograph of the product in use. "Keep your clubs clean, every round" communicates the benefit immediately. Two CTAs: "Shop now" for the standard flow, "Design your own" as a direct entry point to the customizer, making the new feature visible from the first scroll.',
                  action: 'Single CTA hierarchy, customizer surface at hero level',
                },
                {
                  title: 'Trust Bar: Objection Handlers at the Right Moment',
                  body: 'Free shipping $50+, 30-day returns, 5,000+ golfers, placed immediately below the hero, before the product grid. Not decorative. These are placed exactly where a first-time visitor is most likely to hesitate.',
                  action: 'Trust signals above product grid, not in the footer',
                },
                {
                  title: 'Product Sections: One Job Each',
                  body: 'Best sellers with clean photography and direct naming. "Why No-Dirt?" translating features into benefits. Reviews with real customer quotes. Each section earns its place by moving the user closer to a purchase decision.',
                  action: 'Every section earns its place or gets cut',
                },
                {
                  title: 'The Customizer: Built from Scratch in Liquid',
                  body: 'New product template with a two-panel layout: live product preview on the left, customization controls on the right. Logo upload, 25-character text input, font selector, thread color swatches, decoration method with live pricing, and a total that updates before the CTA. All submitted assets are tied to the order on the backend.',
                  action: 'Zero friction from custom intent to checkout',
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
            <div>
              <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '10px' }}>Customizer: Final Product</p>
              <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                <img src="/nodirt-customizer.jpg" alt="No Dirt Golf product customizer" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>
        }
      />

      {/* ── 06 RESULTS ── */}
      <SplitSection
        number="06"
        title="RESULTS"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            First 30 days post-launch vs. prior 30 days, launched simultaneously with paid ads.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="mobile-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {[
                { value: '1.68%', change: '+66%', label: 'Conversion rate' },
                { value: '12,609', change: '+75%', label: 'Sessions' },
                { value: '770', change: '+201%', label: 'Added to cart' },
                { value: '212', change: '+190%', label: 'Completed purchases' },
              ].map((m, i) => (
                <div key={i} style={glass}>
                  <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '32px', color: '#1A0A0A', letterSpacing: '0.04em', lineHeight: '1', marginBottom: '4px' }}>
                    {m.value}
                  </p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: '700', color: '#E63235', marginBottom: '4px' }}>
                    {m.change}
                  </p>
                  <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4 }}>{m.label}</p>
                </div>
              ))}
            </div>
            <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4 }}>Conversion Rate Over Time</p>
                  <p style={{ ...labelText }}>Data from Shopify</p>
                </div>
                <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                  <img src="/nodirt-analytics-1.png" alt="Conversion rate over time" style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4 }}>Conversion Funnel</p>
                  <p style={{ ...labelText }}>Data from Shopify</p>
                </div>
                <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                  <img src="/nodirt-analytics-2.png" alt="Conversion funnel breakdown" style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
            <p style={{ ...bodyText, fontSize: '13px', opacity: 0.7 }}>
              The add-to-cart increase (+201%) is the headline number: it's the most direct signal that the homepage and product presentation worked. Getting a cold visitor to add to cart requires product clarity, trust, and motivation all at once. Tripling that rate in a single redesign cycle is the result that matters most.
            </p>
          </div>
        }
      />

      {/* ── 07 REFLECTION ── */}
      <SplitSection
        number="07"
        title="REFLECTION"
        right={
          <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={glass}>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '12px' }}>REMOVE BEFORE YOU ADD</h3>
              <p style={{ ...bodyText, fontSize: '14px' }}>
                The biggest improvements came from cutting sections that didn't serve the purchase journey, not from adding new ones. The instinct in a redesign is always to add more. Going the opposite direction, a simpler, more focused page, is what moved the numbers. Trust signals also need to live near the friction points, not at the bottom of the page where they typically land.
              </p>
            </div>
            <div style={glass}>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '12px' }}>THE CUSTOMIZER CHANGED THE PRODUCT</h3>
              <p style={{ ...bodyText, fontSize: '14px' }}>
                Adding the customizer didn't just add a feature: it shifted the product's market position. No Dirt Golf went from selling a golf towel to selling a personalizable premium golf accessory. That opened up gifting, corporate, and team use cases the standard product couldn't address.
              </p>
            </div>
            <div style={glass}>
              <p style={{ ...labelText, marginBottom: '8px' }}>Still Ahead</p>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '12px' }}>EMBROIDERY DECORATION METHOD</h3>
              <p style={{ ...bodyText, fontSize: '14px' }}>Add embroidery alongside DTF with visual examples of each: stronger premium feel and higher price points for complex customizations.</p>
            </div>
            <div style={glass}>
              <p style={{ ...labelText, marginBottom: '8px' }}>Still Ahead</p>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '12px' }}>TEAM & BULK ORDERING FLOW</h3>
              <p style={{ ...bodyText, fontSize: '14px' }}>The customizer naturally attracts corporate and team buyers. A dedicated bulk ordering experience for that segment is a clear next build.</p>
            </div>
          </div>
        }
      />

      <div style={{ paddingBottom: '80px' }} />
      <Footer />
    </main>
  );
}
