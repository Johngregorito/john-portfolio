import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { bodyText, labelText, glass, Divider, SplitSection } from '@/lib/styles';

export const metadata = {
  title: 'International Peace Gardens | John Morales',
  description: 'UX/UI case study: International Peace Gardens website redesign.',
};

export default function IPGPage() {
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
                INTERNATIONAL<br />PEACE GARDENS
              </h1>
              <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(22px, 3vw, 36px)', letterSpacing: '0.1em', color: '#1A0A0A', marginBottom: '48px' }}>
                WEBSITE REDESIGN
              </h2>
              <div className="mobile-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {[
                  { value: 'UX/UI Designer', label: 'My Role' },
                  { value: 'Web', label: 'Platform' },
                  { value: 'Figma + HTML', label: 'Deliverables' },
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
              <img src="/ipg-background.jpg" alt="International Peace Gardens" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <img src="/ipg-float.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

          </div>
        </div>
      </section>

      {/* ── 01 PROJECT OVERVIEW ── */}
      <SplitSection
        number="01"
        title="PROJECT OVERVIEW"
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={bodyText}>
              The International Peace Gardens, tucked inside Jordan Park in Salt Lake City, celebrates 26 countries through native plants, cultural sculptures, and heritage design. It's free to visit, deeply community-oriented, and genuinely meaningful; yet most people in the city have never heard of it. A big part of why: the website. I collaborated with a team of three designers to redesign it from the ground up, creating a digital experience that finally matched the spirit of the gardens themselves: inviting, culturally rich, and easy to navigate.
            </p>
            {/* Before / After */}
            <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <p style={{ ...labelText, marginBottom: '12px' }}>Before</p>
                <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                  <img src="/ipg-before.jpg" alt="Original IPG website" style={{ width: '100%', display: 'block' }} />
                </div>
                <p style={{ ...bodyText, fontSize: '13px', marginTop: '12px', opacity: 0.6 }}>
                  Cluttered homepage, no clear navigation, outdated colors, buried Donate button, poor mobile usability.
                </p>
              </div>
              <div>
                <p style={{ ...labelText, marginBottom: '12px' }}>After</p>
                <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                  <img src="/ipg-after.jpg" alt="Redesigned IPG website" style={{ width: '100%', display: 'block' }} />
                </div>
                <p style={{ ...bodyText, fontSize: '13px', marginTop: '12px', opacity: 0.6 }}>
                  Clean, welcoming site with visible CTAs, interactive map, events calendar, and a Donate flow that works.
                </p>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={bodyText}>
              <span style={{ fontWeight: '700' }}>"A place this culturally rich deserved a digital presence that matched it."</span> The website wasn't just outdated; it was actively turning visitors away. The problems weren't cosmetic; they were structural.
            </p>
            <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                {
                  title: 'Navigation Failure',
                  label: 'No clear navigation system',
                  body: 'The site had no consistent nav bar. Users had to guess where to go. Finding hours, directions, or events required multiple clicks with no obvious path.',
                },
                {
                  title: 'Brand Identity Gap',
                  label: 'No consistent visual identity',
                  body: 'Fonts, colors, and layouts had no coherent system. The site felt "thrown together": users described it as a 2000s website with no connection to the gardens\' mission.',
                },
                {
                  title: 'Content Hierarchy',
                  label: 'Wall of text, no visual guidance',
                  body: 'The Visit page greeted visitors with dense text and no visual structure. Critical info like hours and directions was buried.',
                },
                {
                  title: 'Conversion Failure',
                  label: 'The Donate button was invisible',
                  body: 'A public garden that depends on donations buried its donation pathway where almost no user found it. The button lacked contrast, prominence, or visual weight.',
                },
              ].map((issue, i) => (
                <div key={i} style={glass}>
                  <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '18px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '6px' }}>
                    {issue.title}
                  </h4>
                  <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '10px' }}>{issue.label}</p>
                  <p style={{ ...bodyText, fontSize: '13px' }}>{issue.body}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* ── 03 RESEARCH & DISCOVERY ── */}
      <SplitSection
        number="03"
        title="RESEARCH & DISCOVERY"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            User interviews + competitive analysis. Affinity mapping clustered findings into four themes. The dominant one: usability failures were actively deterring visits.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4 }}>Empathy Map: Paul Abrams</p>
            <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
              <img src="/ipg-empathy-map.png" alt="IPG empathy map" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  number: '01',
                  title: 'Discovery',
                  body: 'Most users didn\'t know the gardens existed. Multiple interview participants had never heard of the IPG despite living in Salt Lake City. The website was the primary discovery channel, and it was failing.',
                  action: 'Lead with the story and mission, not just logistics',
                },
                {
                  number: '02',
                  title: 'Visual Trust',
                  body: 'Users judge a place by its website design. Low-quality images and outdated design made users assume the gardens were in poor condition. Design quality was being read as a proxy for place quality.',
                  action: 'High-quality photography is non-negotiable',
                },
                {
                  number: '03',
                  title: 'Orientation',
                  body: 'An interactive map was the top requested feature. Users planning visits, especially photographers and first-timers, wanted to understand the layout before arriving.',
                  action: 'Interactive map as a core page feature, not buried',
                },
                {
                  number: '04',
                  title: 'Cultural Interest',
                  body: 'Interest in learning about different cultures was high across all interviews. Users wanted cultural context for each garden section, but couldn\'t find it.',
                  action: 'Surface cultural stories as content, not footnotes',
                },
              ].map((ins) => (
                <div key={ins.number} className="solution-row" style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '32px', alignItems: 'center' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.5), 0 8px 24px rgba(0, 0, 0, 0.05)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '22px', letterSpacing: '0.06em', color: '#1A0A0A' }}>{ins.title}</h4>
                    <p style={bodyText}>{ins.body}</p>
                  </div>
                  <p className="solution-action" style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', color: '#E63235', textAlign: 'left' }}>→ {ins.action}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* ── 04 DEFINE ── */}
      <SplitSection
        number="04"
        title="DEFINE"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            One persona grounded in real interview data: a culturally curious local who would love the gardens, but whose first contact with the website almost stopped the visit from happening.
          </p>
        }
        right={
          <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignItems: 'stretch' }}>
            {/* Persona card */}
            <div style={glass}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', background: '#EDE8E1', marginBottom: '20px' }}>
                <img src="/ipg-persona.jpg" alt="Paul Abrams persona" style={{ width: '100%', display: 'block' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '22px', letterSpacing: '0.06em', color: '#1A0A0A', marginBottom: '4px' }}>Paul Abrams</h3>
              <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '20px' }}>Age 35 · Salt Lake City · Photographer</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'What He Wants', text: 'Find peaceful, photogenic outdoor spaces. Learn about different cultures. Stay updated on local events. Access detailed visit info without digging.' },
                  { label: 'What Frustrates Him', text: 'Outdated websites that look like they haven\'t been touched since 2005. Hard-to-find event info. Relying on social media because the actual site doesn\'t help.' },
                  { label: 'His Scenario', text: 'Paul discovers the IPG exists and visits the website to plan a photography shoot: wants the best garden sections, a map, and open hours. The current site sends him elsewhere.' },
                ].map((item) => (
                  <div key={item.label}>
                    <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '6px' }}>{item.label}</p>
                    <p style={{ ...bodyText, fontSize: '13px' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* HMW + Value Prop */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
              <div style={{ ...glass, flex: 1 }}>
                <p style={{ ...labelText, marginBottom: '12px' }}>How Might We</p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: '500', lineHeight: '1.7', color: '#1A0A0A' }}>
                  Design a website where users can easily plan a visit, explore the cultural identity of each garden section, and support the gardens, so a place worth discovering finally has a digital presence worth finding?
                </p>
              </div>
              <div style={{ ...glass, flex: 1 }}>
                <p style={{ ...labelText, marginBottom: '12px' }}>Value Proposition</p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '15px', fontWeight: '500', lineHeight: '1.7', color: '#1A0A0A' }}>
                  The redesigned IPG website provides a seamless, interactive experience to explore diverse cultures, plan visits, and stay up to date on events, all in one place.
                </p>
              </div>
            </div>
          </div>
        }
      />

      {/* ── 05 INFORMATION ARCHITECTURE ── */}
      <SplitSection
        number="05"
        title="INFORMATION ARCHITECTURE"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            Seven sections, each with sub-pages organized around how visitors actually think about the space — all mapped out before a single screen was designed.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4 }}>Sitemap: Redesigned Information Architecture</p>
            <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
              <img src="/ipg-sitemap.png" alt="IPG redesigned sitemap" style={{ width: '100%', display: 'block' }} />
            </div>
            <p style={bodyText}>
              Key structural decision: "Heritage" and "Cultural Environment" were separated intentionally. Heritage covers the history and physical garden sections (with a map); Cultural Environment covers the living culture of each nation's contribution. Interviews showed users wanted both, but in distinct mental contexts.
            </p>
            <p style={bodyText}>
              Three design principles drawn directly from research guided every screen: stunning visuals first, mission-forward copy, and accessible CTAs on every key page.
            </p>
          </div>
        }
      />

      {/* ── 06 HIGH FIDELITY DESIGN ── */}
      <SplitSection
        number="06"
        title="HIGH FIDELITY DESIGN"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            Four key screens, each solving a specific problem identified in research.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { src: '/ipg-homepage.jpg',    label: 'Homepage',    title: 'Mission-forward hero, visible Donate in nav' },
              { src: '/ipg-visit-page.png',  label: 'Visit Page',  title: 'Map as hero element, logistics above the fold' },
              { src: '/ipg-about-page.png',  label: 'About Page',  title: 'Mission and story front and center' },
              { src: '/ipg-donate-page.png', label: 'Donate Page', title: 'Stepped form + visible confirmation' },
            ].map((design, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4 }}>{design.label}</p>
                <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                  <img src={design.src} alt={design.label} style={{ width: '100%', display: 'block' }} />
                </div>
                <p style={{ ...bodyText, fontSize: '13px', opacity: 0.6 }}>{design.title}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 07 USABILITY TESTING ── */}
      <SplitSection
        number="07"
        title="USABILITY TESTING"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            Testing confirmed the redesign worked, and surfaced six specific things to fix.
          </p>
        }
        right={
          <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              {
                title: 'Navigation Ambiguity',
                body: 'Some users weren\'t sure where to click first. "About" and "Visits" sections needed clearer visual distinction.',
                fix: 'Add descriptive subtext to nav items on hover and use iconography alongside labels.',
              },
              {
                title: 'Donate Button Contrast',
                body: 'A few users ignored the Donate button despite it being in the nav: it needed stronger contrast or a subtle animation.',
                fix: 'Increase button contrast ratio, add a gentle pulse on first scroll, repeat Donate CTA in footer.',
              },
              {
                title: 'Donation Form Fatigue',
                body: 'Testers scrolled quickly through or skipped form fields. A long single-scroll form created anxiety before users even started.',
                fix: 'Break into a 3-step flow: Amount → Personal Info → Confirmation.',
              },
              {
                title: 'No Submission Confirmation',
                body: 'After submitting the donation form, users wanted confirmation before the page redirected. The abrupt redirect felt like something had gone wrong.',
                fix: 'Add a "Processing your donation…" loader with a success state before any redirect.',
              },
              {
                title: 'Mobile Touch Targets',
                body: 'On small screens, some dropdowns and buttons felt cramped. Users hesitated or missed tap targets on the first attempt.',
                fix: 'Increase all interactive elements to minimum 44×44px touch target, add more vertical padding to mobile form fields.',
              },
              {
                title: 'Missed Dedication Checkbox',
                body: 'Users overlooked the "Dedicate Donation" checkbox, an important feature for people donating in someone\'s honor.',
                fix: 'Expand the checkbox visually when checked to reveal dedication fields inline.',
              },
            ].map((issue, i) => (
              <div key={i} style={glass}>
                <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '18px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '10px' }}>
                  {issue.title}
                </h4>
                <p style={{ ...bodyText, fontSize: '13px', marginBottom: '12px' }}>{issue.body}</p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', color: '#E63235' }}>Fix → {issue.fix}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 08 REFLECTION & NEXT STEPS ── */}
      <SplitSection
        number="08"
        title="REFLECTION & NEXT STEPS"
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={glass}>
                <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '12px' }}>WHAT I'D DO DIFFERENTLY</h3>
                <p style={{ ...bodyText, fontSize: '14px' }}>Testing with a convenience-based user pool missed a critical group: the people who volunteer, donate, and organize events. A second research round focused on the engaged community member would have sharpened the Volunteer and Donate pages considerably.</p>
              </div>
              <div style={glass}>
                <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '12px' }}>STRONGEST DECISION</h3>
                <p style={{ ...bodyText, fontSize: '14px' }}>Rebuilding the information architecture before touching Figma was the right call. The original problems weren't cosmetic; they were structural. Solving navigation and hierarchy first made every design decision that followed faster and more defensible.</p>
              </div>
            </div>
            <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginTop: '8px' }}>What's next</p>
            <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { title: 'Interactive Garden Map', body: 'An SVG map with clickable country sections and walking routes — the top-requested feature that never made it into this sprint.' },
                { title: 'Multilingual Support', body: 'A garden representing 26 nations should be navigable in more than one language. Spanish, Mandarin, and Arabic would be the starting point.' },
                { title: 'Events Calendar + Volunteer Signups', body: 'A live calendar with RSVP and volunteer registration would turn the site into a community hub, not just an information page.' },
                { title: 'E-commerce for Souvenirs + Memberships', body: 'A membership tier and gift shop would create recurring revenue and give supporters an ongoing relationship with the gardens.' },
              ].map((item, i) => (
                <div key={i} style={glass}>
                  <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '18px', letterSpacing: '0.06em', color: '#1A0A0A', marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ ...bodyText, fontSize: '13px' }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <div style={{ paddingBottom: '80px' }} />
      <Footer />
    </main>
  );
}
