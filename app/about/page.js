import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutImage from '@/components/AboutImage';
import { bodyText } from '@/lib/styles';

export const metadata = {
  title: 'About — John Morales',
  description: 'Designer based in Utah, United States.',
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#f9f8f7' }}>
      <Navbar />

      <section className="page-top" style={{ padding: '120px 0 100px' }}>
        <div className="container">
          <div className="about-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}>

            {/* Left — text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <h1 style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(72px, 11vw, 140px)',
                lineHeight: '0.9',
                color: '#E63235',
                letterSpacing: '0.02em',
              }}>
                ABOUT
              </h1>

              <p style={bodyText}>
                John Morales is a designer currently based in Utah, United States. Born and raised in Venezuela, his passion for design began through visual communication and a fascination with how people interact with ideas, products, and experiences.
              </p>

              <p style={bodyText}>
                His foundation in graphic design was established in Venezuela, where he earned a Bachelor's degree in Graphic Design. After moving to the United States, he expanded his practice through the University of Utah's UX/UI Design program, bridging traditional design principles with digital product experiences.
              </p>

              <p style={bodyText}>
                Currently, he leads Webstores, Product, and Design Operations at Truwear, where he oversees the development of e-commerce platforms, internal systems, client storefronts, and digital product initiatives. His work spans product design, UX/UI, branding, e-commerce, photography, and creative direction.
              </p>

              <p style={bodyText}>
                Today, he lives and works in Utah. Outside of work, you'll usually find him exploring photography, refining creative projects, learning new skills, or searching for the perfect cup of coffee.
              </p>
            </div>

            {/* Right — image with x-ray reveal */}
            <AboutImage />

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
