import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#f9f8f7' }}>
      <Navbar />
      <Hero />
      <WorkSection />
      <Footer />
    </main>
  );
}
