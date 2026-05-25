import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS, STATS_SECTION, TESTIMONIALS, waUrl } from '../../data/siteConfig';

// SVG icon paths na mesma ordem de STATS
const STAT_ICONS = [
  'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3',
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  'M23 7l-7 5 7 5V7zM1 5h15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H1a2 2 0 0 1 0-2V7a2 2 0 0 1 2-2z',
  'M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0',
]

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const duration = 2000;
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      setCount(Math.round(target * (1 - Math.pow(1 - p, 4))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Big watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="cinematic-title"
          style={{ fontSize: 'clamp(6rem,20vw,22rem)', color: 'rgba(201,168,76,0.022)', lineHeight: 1, whiteSpace: 'nowrap' }}
        >
          PREMIUM
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 md:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-14" style={{ background: 'linear-gradient(to right,transparent,var(--gold-primary))' }} />
            <span style={{ color:'var(--gold-primary)', fontSize:'0.8rem', letterSpacing:'0.25em', textTransform:'uppercase', fontWeight: 'bold' }}>
              {STATS_SECTION.eyebrow}
            </span>
            <div className="h-px w-14" style={{ background: 'linear-gradient(to left,transparent,var(--gold-primary))' }} />
          </div>
          <h2
            className="cinematic-title"
            style={{ fontSize: 'clamp(1.8rem,4vw,3.2rem)', color: 'var(--text-primary)', lineHeight: 1.05 }}
          >
            {STATS_SECTION.title} <span className="gold-text">{STATS_SECTION.titleGold}</span>
            <br />
            {STATS_SECTION.subtitle}
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 rounded-sm overflow-hidden"
          style={{ marginBottom: '2cm', border: '1px solid rgba(201,168,76,0.08)' }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.7 }}
              className="relative p-4 sm:p-6 md:p-9 text-center group cursor-default"
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid rgba(201,168,76,0.06)' : 'none',
                borderBottom: i < STATS.length - (STATS.length % 3 || 3) ? '1px solid rgba(201,168,76,0.06)' : 'none',
              }}
              whileHover={{ background: 'rgba(201,168,76,0.035)' }}
            >
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background:'rgba(201,168,76,0.07)', border:'1px solid rgba(201,168,76,0.18)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={STAT_ICONS[i]} />
                </svg>
              </div>
              <div
                className="gold-shimmer font-bold mb-1"
                style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(1.6rem,3.5vw,2.8rem)', letterSpacing:'0.03em', lineHeight:1 }}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div style={{ color:'var(--text-muted)', fontSize:'0.68rem', letterSpacing:'0.12em', textTransform:'uppercase' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divisor visual com bastante espaçamento vertical */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full flex justify-center my-14 md:my-20"
        >
          <div className="h-px w-[80%] max-w-2xl" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)' }} />
        </motion.div>

        {/* Testimonials */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-center mb-10 md:mb-12"
          style={{ color:'var(--text-muted)', fontSize:'0.64rem', letterSpacing:'0.2em', textTransform:'uppercase' }}
        >
          — O que dizem nossos alunos —
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 + i * 0.13, duration: 0.7 }}
              className="relative p-6 rounded-sm"
              style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(201,168,76,0.1)' }}
              whileHover={{ borderColor:'rgba(201,168,76,0.28)', background:'rgba(201,168,76,0.03)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <svg key={si} width="11" height="11" viewBox="0 0 24 24" fill="var(--gold-primary)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              {/* Text */}
              <p
                className="mb-5"
                style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1rem', fontStyle:'italic', fontWeight:300, color:'rgba(245,240,232,0.6)', lineHeight:1.7 }}
              >
                "{t.text}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background:'rgba(201,168,76,0.1)', border:'1px solid rgba(201,168,76,0.3)', color:'var(--gold-primary)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize:'0.78rem', fontWeight:600, color:'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize:'0.62rem', color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.1em' }}>{t.role}</div>
                </div>
              </div>
              {/* Decorative quote */}
              <div className="absolute top-3 right-4 opacity-[0.07] select-none pointer-events-none" style={{ fontFamily:"'Playfair Display',serif", fontSize:'5rem', color:'var(--gold-primary)', lineHeight:1 }}>
                "
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="relative overflow-hidden rounded-sm text-center p-10 md:p-14"
          style={{
            marginTop: '2cm',
            background: 'linear-gradient(135deg,rgba(201,168,76,0.07) 0%,rgba(139,105,20,0.04) 50%,rgba(201,168,76,0.07) 100%)',
            border: '1px solid rgba(201,168,76,0.22)',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.55),transparent)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.25),transparent)' }} />

          <p style={{ color:'var(--gold-primary)', fontSize:'0.63rem', letterSpacing:'0.25em', textTransform:'uppercase', marginBottom:'12px' }}>
            {STATS_SECTION.cta_eyebrow}
          </p>
          <h3
            className="cinematic-title mb-4"
            style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', color:'var(--text-primary)' }}
          >
            {STATS_SECTION.cta_title} <span className="gold-text">{STATS_SECTION.cta_titleGold}</span>
          </h3>
          <p
            className="mb-8"
            style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1rem', color:'rgba(245,240,232,0.48)', fontStyle:'italic', fontWeight:300, lineHeight:1.65, textAlign:'center', width:'100%' }}
          >
            {STATS_SECTION.cta_sub}
          </p>
          <motion.button
            className="btn-gold inline-flex items-center gap-3"
            style={{ borderRadius:'2px', fontSize:'0.78rem' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.open(waUrl('Olá! Vim através do site JJ Bar & Barista Academy e quero acessar a plataforma e começar minha transformação.'), '_blank', 'noopener,noreferrer')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
            {STATS_SECTION.cta_label}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
