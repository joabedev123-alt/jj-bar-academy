import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { courses } from '../../data/courses';
import {
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
  CAROUSEL_INTERVAL_MS,
  BENEFITS_STRIP,
} from '../../data/siteConfig';

function whatsappUrl(courseTitle: string) {
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no curso "${courseTitle}" da JJ Bar & Barista Academy. ${WHATSAPP_MESSAGE}`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function CarouselCard({ course, index }: { course: typeof courses[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.open(whatsappUrl(course.title), '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: Math.min(index * 0.06, 0.5), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="course-card flex-shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        width: '220px',
        borderRadius: '4px',
        background: 'var(--bg-card)',
        cursor: 'pointer',
        transform: hovered ? 'scale(1.05) translateY(-4px)' : 'scale(1) translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease',
        boxShadow: hovered
          ? `0 16px 40px rgba(0,0,0,0.6), 0 0 0 1px ${course.accentColor}40`
          : '0 4px 16px rgba(0,0,0,0.3)',
      }}
    >
      {/* Image — clean, no overlays */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10', borderRadius: '4px 4px 0 0' }}>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1)',
            filter: hovered ? 'brightness(0.75)' : 'brightness(0.6)',
          }}
          loading="lazy"
        />
        {/* Bottom fade only — no icons or badges on top */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(8,8,8,0.88) 100%)' }}
        />
      </div>

      {/* Info */}
      <div className="p-3">
        <h3
          className="font-semibold mb-1 line-clamp-1"
          style={{ fontSize: '0.78rem', color: 'var(--text-primary)', letterSpacing: '0.02em' }}
        >
          {course.title}
        </h3>
        <p
          className="line-clamp-2 mb-3"
          style={{ color: 'var(--text-muted)', fontSize: '0.67rem', lineHeight: 1.5 }}
        >
          {course.description}
        </p>

        {/* Animated gold line */}
        <div
          className="h-px mb-3"
          style={{
            background: `linear-gradient(90deg, ${course.accentColor}, transparent)`,
            width: hovered ? '100%' : '28%',
            transition: 'width 0.4s ease',
          }}
        />

        {/* CTA button */}
        <div
          className="w-full text-center py-2"
          style={{
            background: hovered ? `${course.accentColor}20` : 'transparent',
            border: `1px solid ${course.accentColor}45`,
            borderRadius: '2px',
            color: course.accentColor,
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
          }}
        >
          {course.ctaLabel || 'VER CURSO'}
        </div>
      </div>
    </motion.div>
  );
}

// ── Auto-scroll progress dots ──
function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-1.5 justify-center mt-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === current ? '20px' : '5px',
            height: '3px',
            borderRadius: '2px',
            background: i === current ? 'var(--gold-primary)' : 'rgba(201,168,76,0.2)',
            transition: 'all 0.4s ease',
          }}
        />
      ))}
    </div>
  );
}

export default function CourseCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const CARD_WIDTH = 220 + 16; // card + gap

  // ── Auto-scroll logic ──
  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el || isPaused) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      const nextScroll = el.scrollLeft + CARD_WIDTH;

      if (nextScroll >= maxScroll - 10) {
        // reached end → loop back smoothly
        el.scrollTo({ left: 0, behavior: 'smooth' });
        setCurrentIndex(0);
      } else {
        el.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
        setCurrentIndex(prev => Math.min(prev + 1, courses.length - 1));
      }
      setCanScrollLeft(el.scrollLeft > 0);
    }, CAROUSEL_INTERVAL_MS);
  }, [isPaused, CARD_WIDTH]);

  useEffect(() => {
    if (!isInView) return;
    startAutoScroll();
    return () => { if (autoScrollRef.current) clearInterval(autoScrollRef.current); };
  }, [isInView, isPaused, startAutoScroll]);

  const manualScroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const delta = dir === 'right' ? CARD_WIDTH * 3 : -CARD_WIDTH * 3;
    el.scrollBy({ left: delta, behavior: 'smooth' });
    setTimeout(() => {
      if (!el) return;
      setCanScrollLeft(el.scrollLeft > 0);
      setCurrentIndex(Math.round(el.scrollLeft / CARD_WIDTH));
    }, 420);
    // reset auto-scroll timer after manual nav
    startAutoScroll();
  };

  const totalDots = Math.ceil(courses.length / 3);
  const activeDot = Math.min(Math.floor(currentIndex / 3), totalDots - 1);

  return (
    <section
      id="carousel"
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Top divider line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
      />

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="w-full text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, var(--gold-primary))' }} />
              <span
                className="uppercase tracking-widest"
                style={{ color: 'var(--gold-primary)', letterSpacing: '0.2em', fontSize: '0.65rem' }}
              >
                Nossa Plataforma
              </span>
              <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, var(--gold-primary))' }} />
            </div>
            <h2
              className="cinematic-title gold-text"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              CURSOS EM DESTAQUE
            </h2>
          </div>

          {/* Nav arrows + auto indicator — centered below title */}
          <div className="flex items-center gap-3 mt-5">
            {/* Auto-scroll toggle */}
            <motion.button
              onClick={() => setIsPaused(p => !p)}
              className="flex items-center gap-2 px-3 py-2 rounded-sm cursor-pointer"
              style={{
                background: isPaused ? 'rgba(255,255,255,0.03)' : 'rgba(201,168,76,0.08)',
                border: `1px solid ${isPaused ? 'rgba(255,255,255,0.06)' : 'rgba(201,168,76,0.3)'}`,
                color: isPaused ? 'var(--text-muted)' : 'var(--gold-primary)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              title={isPaused ? 'Retomar auto-scroll' : 'Pausar auto-scroll'}
            >
              {isPaused ? (
                <>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                  AUTO
                </>
              ) : (
                <>
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--gold-primary)' }}
                  />
                  AO VIVO
                </>
              )}
            </motion.button>

            <motion.button
              onClick={() => manualScroll('left')}
              className="w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer"
              style={{
                background: canScrollLeft ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${canScrollLeft ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.08)'}`,
                color: canScrollLeft ? 'var(--gold-primary)' : 'var(--text-muted)',
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>
            <motion.button
              onClick={() => manualScroll('right')}
              className="w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer"
              style={{
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.4)',
                color: 'var(--gold-primary)',
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Category filters removed */}

        {/* Cards track */}
        <div
          className="relative"
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--bg-primary), transparent)' }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, var(--bg-primary), transparent)' }}
          />

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
            onScroll={(e) => {
              const el = e.currentTarget;
              setCanScrollLeft(el.scrollLeft > 0);
              setCurrentIndex(Math.round(el.scrollLeft / CARD_WIDTH));
            }}
          >
            {courses.map((course, i) => (
              <div key={course.id} style={{ scrollSnapAlign: 'start' }}>
                <CarouselCard course={course} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <ProgressDots total={totalDots} current={activeDot} />

        {/* WhatsApp CTA hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center gap-2 mt-8"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
          <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)', letterSpacing: '0.05em', fontWeight: 600 }}>
            Clique em qualquer curso para falar direto no WhatsApp
          </span>
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex justify-center mt-8"
        >
          <div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 py-3 rounded-sm"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(201,168,76,0.12)',
            }}
          >
            {BENEFITS_STRIP.flatMap((item, i) => [
              i > 0 && <div key={`dot-${i}`} className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold-dark)' }} />,
              <div key={item.value} className="text-center px-2">
                <div className="gold-text font-bold" style={{ fontFamily:"'Bebas Neue',sans-serif", letterSpacing:'0.05em', fontSize:'1.6rem' }}>
                  {item.value}
                </div>
                <div style={{ color:'var(--text-primary)', fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight: 500 }}>
                  {item.label}
                </div>
              </div>,
            ])}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
