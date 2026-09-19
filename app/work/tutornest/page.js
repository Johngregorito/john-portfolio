import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { bodyText, labelText, glass, Divider, SplitSection } from '@/lib/styles';

export const metadata = {
  title: 'TutorNest | John Morales',
  description: 'UX/UI case study: TutorNest educational mobile platform.',
};

export default function TutorNestPage() {
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
                TUTORNEST
              </h1>
              <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(22px, 3vw, 36px)', letterSpacing: '0.1em', color: '#1A0A0A', marginBottom: '48px' }}>
                EDUCATIONAL APP
              </h2>
              <div className="mobile-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {[{ value: '4 Weeks', label: 'Timeline' }, { value: 'UX/UI Designer', label: 'My Role' }, { value: 'Figma + FigJam', label: 'Tools' }].map((s, i) => (
                  <div key={i} style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.5), 0 8px 24px rgba(0, 0, 0, 0.05)', borderRadius: '16px', padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '18px', letterSpacing: '0.06em', color: '#1A0A0A', marginBottom: '4px' }}>{s.value}</p>
                    <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — static card */}
            <div className="hero-project-image" style={{ position: 'relative', height: '420px', borderRadius: '28px', overflow: 'hidden' }}>
              <img src="/tutornest-background.jpg" alt="TutorNest" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <img src="/tutornest-float.png" alt="" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
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
              TutorNest is a mobile skill-sharing platform that matches students with instructors for personalized, interactive learning. I worked as a UX/UI designer on a team of four, contributing across the full design process, from research and synthesis through wireframing, prototyping, and usability testing, over a 4-week sprint.
            </p>
            <p style={{ ...bodyText, opacity: 0.6 }}>
              The core challenge: design a two-sided app that works for learners who need structure and motivation, and instructors who need flexibility and tools to engage students effectively.
            </p>
          </div>
        }
      />

      {/* ── 02 PROBLEM STATEMENT ── */}
      <SplitSection
        number="02"
        title="PROBLEM STATEMENT"
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={bodyText}>
              <span style={{ fontWeight: '700' }}>"The real problem wasn't access to education: it was connection."</span> Existing platforms prioritize content delivery over connection. Students can't find instructors who match their pace, learning style, or availability. Instructors have no tools to engage individual learners. The result: passive lectures, low engagement, and early dropout on both sides.
            </p>
            <p style={{ ...bodyText, opacity: 0.6 }}>
              The goal was to design a platform that solves match quality first, then wraps it in tools that keep both parties engaged, accountable, and motivated to continue.
            </p>
          </div>
        }
      />

      {/* ── 03 RESEARCH & DISCOVERY ── */}
      <SplitSection
        number="03"
        title="RESEARCH & DISCOVERY"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            4 interviews + 12 survey respondents. Four insights shaped every design decision that followed.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { number: '01', title: 'Engagement', body: 'All 12 survey respondents said hands-on, interactive learning is most effective. Passive lectures consistently lead to disengagement.', action: 'Prioritize interactive formats over content-dump flows' },
              { number: '02', title: 'Match Quality', body: 'Students feel intimidated asking for help; instructors feel ignored when students disengage. Both stem from poor fit between teaching and learning styles.', action: 'Make matching style + personality central, not just subject' },
              { number: '03', title: 'Motivation', body: '~⅔ of respondents value progress tracking and a reward system. Most preferred a mix of live sessions and pre-made content.', action: 'Build gamification and progress visibility into the core' },
              { number: '04', title: 'Instructor Pain', body: 'The biggest teaching challenges were explaining material clearly, managing scheduling, and keeping pace with different learners.', action: 'Give instructors structured tools: calendar, notes, student dashboards' },
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
        }
      />

      {/* ── 04 DEFINE ── */}
      <SplitSection
        number="04"
        title="DEFINE"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>Two archetypes, one platform that had to serve both.</p>
        }
        right={
          <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { name: 'Peter, 23', role: 'Learner / Skill-seeker', image: '/tutornest-persona-peter.png', goal: 'Learn new skills to advance his career, with structure and motivation to stay consistent despite a busy schedule.', frustration: 'Feels overwhelmed by unorganized content. Nervous about asking questions and afraid of looking unprepared.', need: 'A matched instructor, organized materials, progress tracking, and a low-intimidation way to connect.' },
              { name: 'Betty, 46', role: 'Instructor / Tutor', image: '/tutornest-persona-betty.png', goal: 'Teach on her own schedule while building genuine connections with students and tracking their progress meaningfully.', frustration: "Online teaching strips away face-to-face connection. It's hard to read student understanding or build trust remotely.", need: 'Communication tools, scheduling control, and student performance visibility.' },
            ].map((persona, i) => (
              <div key={i} style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.5), 0 8px 24px rgba(0, 0, 0, 0.05)', borderRadius: '16px', padding: '32px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <img src={persona.image} alt={persona.name} style={{ width: '76px', height: '76px', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '22px', letterSpacing: '0.06em', color: '#1A0A0A', marginBottom: '4px' }}>{persona.name}</h3>
                <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '28px' }}>{persona.role}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[{ label: 'Goal', text: persona.goal }, { label: 'Frustration', text: persona.frustration }, { label: 'Key Need', text: persona.need }].map(item => (
                    <div key={item.label}>
                      <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '6px' }}>{item.label}</p>
                      <p style={bodyText}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 05 IDEATION & WIREFRAMES ── */}
      <SplitSection
        number="05"
        title="IDEATION & WIREFRAMES"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            From user flow to 12-screen wireframe set, built around matching style and personality, not just subject.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Side-by-side images */}
            <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '8px' }}>User Flow</p>
                <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                  <img src="/tutornest-user-flow.png" alt="User flow" style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
              <div>
                <p style={{ ...labelText, color: '#1A0A0A', opacity: 0.4, marginBottom: '8px' }}>Lo-fi Wireframes</p>
                <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
                  <img src="/tutornest-lofi.png" alt="Lo-fi wireframes" style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* ── 06 MID FIDELITY ── */}
      <SplitSection
        number="06"
        title="MID FIDELITY WIREFRAMES"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            The wireframe set iterated into mid-fidelity with real content and subject categories. The version taken into usability testing.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
              <img src="/tutornest-hifi.png" alt="Mid fidelity wireframes" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
              <img src="/tutornest-prototype.png" alt="Mid fidelity prototype flow" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        }
      />

      {/* ── 07 TESTING ── */}
      <SplitSection
        number="07"
        title="TESTING & ITERATIONS"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            4 moderated usability tests. Each participant completed 5 tasks. Navigation success was high, but four issues emerged consistently.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { title: 'Icon Clarity', body: "Bottom nav icons weren't immediately recognizable. Users paused or misclicked.", fix: 'Add text labels to bottom bar icons.' },
                { title: 'Section Labeling', body: "Users weren't always sure where they were in the app.", fix: 'Stronger page headers, reduced visual clutter per screen.' },
                { title: 'Information Density', body: 'Too much content per screen caused users to feel overwhelmed before completing flows.', fix: 'Progressively disclose information; show less until asked.' },
                { title: 'Search Redundancy', body: 'Two entry points to search without clear differentiation between browsing and finding a tutor.', fix: 'Distinguish "browse by topic" from "find a tutor" explicitly.' },
              ].map((issue, i) => (
                <div key={i} style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.5), 0 8px 24px rgba(0, 0, 0, 0.05)', borderRadius: '16px', padding: '28px' }}>
                  <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '18px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '10px' }}>{issue.title}</h4>
                  <p style={{ ...bodyText, fontSize: '13px', marginBottom: '12px' }}>{issue.body}</p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: '700', letterSpacing: '0.06em', color: '#E63235' }}>Fix → {issue.fix}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* ── 08 HIGH FIDELITY ── */}
      <SplitSection
        number="08"
        title="HIGH FIDELITY DESIGN"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            Final polished screens produced collaboratively with the full team, translating the tested mid-fi wireframes into a branded, shippable experience.
          </p>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#EDE8E1' }}>
              <img src="/tutornest-hifi-V2.png" alt="High fidelity screens" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        }
      />

      {/* ── 09 REFLECTION ── */}
      <SplitSection
        number="09"
        title="REFLECTION & NEXT STEPS"
        left={
          <p style={{ ...bodyText, opacity: 0.6 }}>
            What worked, what didn't, and what the next iteration would look like.
          </p>
        }
        right={
          <div className="mobile-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.5), 0 8px 24px rgba(0, 0, 0, 0.05)', borderRadius: '16px', padding: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '16px' }}>WHAT I'D DO DIFFERENTLY</h3>
              <p style={{ ...bodyText, fontSize: '14px' }}>We tried to solve too much in one sprint. I'd scope the first version to just the matching and messaging flow, validate that it works, then layer in tools. Doing less better would have produced stronger wireframes and cleaner test results.</p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.5), 0 8px 24px rgba(0, 0, 0, 0.05)', borderRadius: '16px', padding: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '20px', letterSpacing: '0.08em', color: '#1A0A0A', marginBottom: '16px' }}>WHAT'S STILL UNSOLVED</h3>
              <p style={{ ...bodyText, fontSize: '14px' }}>We only tested the student perspective. The instructor experience was never validated with real instructors. That's the higher-risk side and needs its own testing round. Next: tutor onboarding flow, visual design pass, and gamification exploration.</p>
            </div>
          </div>
        }
      />

      <div style={{ paddingBottom: '80px' }} />
      <Footer />
    </main>
  );
}
