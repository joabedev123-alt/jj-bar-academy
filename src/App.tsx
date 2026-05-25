import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import CourseCarousel from './components/sections/CourseCarousel';
import CourseSection from './components/sections/CourseSection';
import StatsSection from './components/sections/StatsSection';
import Footer from './components/layout/Footer';
import CursorGlow from './components/ui/CursorGlow';
import './index.css';

export default function App() {
  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  // Page scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div style={{ background: 'var(--bg-primary)', cursor: 'none' }}>
      {/* Custom cursor */}
      <CursorGlow />

      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #8B6914, #C9A84C, #E8C97A)',
          transformOrigin: '0%',
          zIndex: 9999,
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />

        {/* Section separator */}
        <div style={{ height: '1cm', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ height: '1px', width: '60%', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />
        </div>

        <CourseCarousel />

        {/* Section separator */}
        <div style={{ height: '1cm', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ height: '1px', width: '60%', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />
        </div>

        <CourseSection />

        {/* Section separator */}
        <div style={{ height: '1cm', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ height: '1px', width: '60%', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />
        </div>

        <StatsSection />

        {/* Section separator */}
        <div style={{ height: '2cm', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ height: '1px', width: '60%', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
