import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GoldParticles from '../ui/GoldParticles';
import { HERO, waUrl } from '../../data/siteConfig';

// SVG icon paths reutilizáveis por index de stat
const STAT_ICONS = [
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3',
  'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ['0%', '25%']);
  const textY = useTransform(scrollY, [0, 600], ['0%', '15%']);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '560px' }}
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%]" style={{ y: bgY }}>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${HERO.image}')`,
            backgroundSize: '75%', // Diminui o tamanho da imagem (ajuste a % se precisar)
            backgroundPosition: 'center right', // Ajusta a posição
            backgroundRepeat: 'no-repeat',
            transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -5}px)`,
            transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
            willChange: 'transform',
          }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="cinematic-overlay absolute inset-0 z-10" />
      <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse at center bottom, rgba(201,168,76,0.06) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(90deg, rgba(8,8,8,0.6) 0%, transparent 50%, rgba(8,8,8,0.4) 100%)' }} />

      {/* Particles */}
      <div className="absolute inset-0 z-20">
        <GoldParticles count={50} />
      </div>

      {/* Content */}
      <motion.div
        className="absolute inset-0 z-30 flex flex-col justify-center items-start px-5 sm:px-8 md:px-12 lg:px-16"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-[860px]">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="premium-badge">{HERO.badge}</div>
            <div className="h-px flex-1 max-w-[80px]" style={{ background: 'rgba(201,168,76,0.5)' }} />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16,1,0.3,1] }}
            className="cinematic-title mb-5"
            style={{ fontSize: 'clamp(1.7rem,5vw,5.0rem)', lineHeight: '1.0', color: 'var(--text-primary)' }}
          >
            {HERO.title[0]}
            <br /><span className="gold-shimmer">{HERO.title[1]}</span>
            <br /><span style={{ color: 'rgba(245,240,232,0.9)' }}>{HERO.title[2]}</span>
            <br /><span className="gold-text">{HERO.title[3]}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mb-10 max-w-[540px]"
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 'clamp(0.9rem,1.8vw,1.25rem)',
              color: 'rgba(245,240,232,0.68)',
              lineHeight: '1.65',
              fontStyle: 'italic',
              fontWeight: 300,
            }}
          >
            {HERO.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.button
              className="btn-gold flex items-center gap-3"
              style={{ borderRadius: '2px', fontSize: '0.82rem', padding: '13px 22px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open(waUrl('Olá! Vim através do site JJ Bar & Barista Academy e gostaria de começar minha jornada na plataforma.'), '_blank', 'noopener,noreferrer')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
              {HERO.cta_primary}
            </motion.button>
            <motion.button
              className="btn-outline-gold flex items-center gap-3"
              style={{ borderRadius: '2px', fontSize: '0.82rem', padding: '13px 22px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => document.querySelector('#carousel')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              {HERO.cta_secondary}
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            {HERO.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={STAT_ICONS[i]} />
                  </svg>
                </div>
                <div>
                  <div className="gold-text font-bold" style={{ fontSize: 'clamp(1rem,1.5vw,1.2rem)', fontFamily:"'Bebas Neue',sans-serif", letterSpacing:'0.05em' }}>
                    {s.value}
                  </div>
                  <div style={{ color:'var(--text-muted)', fontSize:'0.65rem', textTransform:'uppercase', letterSpacing:'0.12em' }}>
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span style={{ color:'var(--text-muted)', fontSize:'0.52rem', letterSpacing:'0.25em', textTransform:'uppercase' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0,8,0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease:'easeInOut' }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--gold-primary), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
