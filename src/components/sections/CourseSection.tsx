import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { courses } from '../../data/courses';

function CourseCard({ course, index }: { course: typeof courses[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      id={
        course.category === 'Mentoria' ? 'mentoria' :
        course.category === 'Negócios' && course.id === 7 ? 'franquia' :
        course.category === 'Carreira' ? 'cruzeiros' :
        course.category === 'Inovação' ? 'ia' :
        course.id === 9 ? 'licitacoes' :
        course.id === 11 ? 'vip' :
        course.id === 12 ? 'youtube' : undefined
      }
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden group"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(255,255,255,0.04)',
        borderRadius: '4px',
        minHeight: '480px',
      }}
      whileHover={{
        borderColor: `${course.accentColor}40`,
        boxShadow: `0 8px 50px rgba(0,0,0,0.5), 0 0 0 1px ${course.accentColor}20`,
      }}
    >
      {/* Layout: alternating left/right image */}
      <div className={`flex flex-col lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''} h-full`}>
        {/* Image side */}
        <div className="relative lg:w-[52%] overflow-hidden" style={{ minHeight: '300px' }}>
          <motion.img
            src={course.image}
            alt={course.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.55)' }}
            whileHover={{ scale: 1.04, filter: 'brightness(0.7)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            loading="lazy"
          />
          {/* Color overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: isEven
                ? `linear-gradient(to right, transparent 40%, var(--bg-card) 100%), linear-gradient(to bottom, transparent 50%, var(--bg-card) 100%)`
                : `linear-gradient(to left, transparent 40%, var(--bg-card) 100%), linear-gradient(to bottom, transparent 50%, var(--bg-card) 100%)`,
            }}
          />
          {/* Accent glow on image */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${isEven ? '80%' : '20%'} 50%, ${course.accentColor}15 0%, transparent 60%)`,
            }}
          />
          {/* Course number */}
          <div
            className="absolute top-6 left-6 font-bold"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '3.5rem',
              color: `${course.accentColor}25`,
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
          {/* Category badge */}
          <div className="absolute bottom-6 left-6">
            <span
              className="px-3 py-1 rounded-sm text-xs uppercase tracking-widest font-semibold"
              style={{
                background: `${course.accentColor}18`,
                border: `1px solid ${course.accentColor}45`,
                color: course.accentColor,
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
              }}
            >
              {course.category}
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="lg:w-[48%] p-8 lg:p-10 flex flex-col justify-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div
              className="w-6 h-px"
              style={{ background: course.accentColor }}
            />
            <span
              className="premium-badge"
              style={{ background: `linear-gradient(135deg, ${course.accentColor}, ${course.accentColor}99)` }}
            >
              {course.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="elegant-title mb-2"
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
            }}
          >
            {course.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mb-1"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1rem',
              color: course.accentColor,
              fontStyle: 'italic',
              fontWeight: 300,
            }}
          >
            {course.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 mt-3"
            style={{
              fontSize: '0.875rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.7,
            }}
          >
            {course.description}
          </motion.p>

          {/* Divider */}
          <div
            className="mb-6"
            style={{
              height: '1px',
              background: `linear-gradient(90deg, ${course.accentColor}40, transparent)`,
            }}
          />

          {/* Items list */}
          <motion.ul className="mb-8 space-y-2">
            {course.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.45 + i * 0.06, duration: 0.5 }}
                className="flex items-center gap-3"
                style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.7)' }}
              >
                <div
                  className="w-4 h-4 rounded-sm flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: `${course.accentColor}18`,
                    border: `1px solid ${course.accentColor}40`,
                  }}
                >
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={course.accentColor} strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center gap-3 group/btn cursor-pointer w-fit"
            style={{
              background: `${course.accentColor}15`,
              border: `1px solid ${course.accentColor}50`,
              color: course.accentColor,
              padding: '12px 28px',
              borderRadius: '2px',
              fontSize: '0.73rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              transition: 'all 0.35s ease',
            }}
            whileHover={{
              background: `${course.accentColor}25`,
              boxShadow: `0 0 25px ${course.accentColor}30`,
              x: 2,
            }}
            whileTap={{ scale: 0.97 }}
          >
            {course.ctaLabel || 'ACESSAR CURSO'}
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Ambient corner glow */}
      <div
        className="absolute w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle, ${course.accentColor}12 0%, transparent 70%)`,
          top: isEven ? '-20px' : 'auto',
          bottom: isEven ? 'auto' : '-20px',
          right: isEven ? '-20px' : 'auto',
          left: isEven ? 'auto' : '-20px',
        }}
      />
    </motion.div>
  );
}

export default function CourseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="cursos" ref={sectionRef} className="relative py-24" style={{ background: 'var(--bg-secondary)' }}>
      {/* Top divider */}
      <div className="section-divider" />

      {/* Ambient bg glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, var(--gold-primary))' }} />
            <span
              className="uppercase tracking-widest text-xs"
              style={{ color: 'var(--gold-primary)', letterSpacing: '0.22em', fontSize: '0.65rem' }}
            >
              Currículo Completo
            </span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, var(--gold-primary))' }} />
          </div>
          <h2
            className="cinematic-title mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            <span className="gold-text">TODOS OS CURSOS</span>
          </h2>
          <p
            className="max-w-lg mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.1rem',
              color: 'rgba(245,240,232,0.5)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Uma plataforma completa para dominar cada faceta do universo
            de bares, cafeterias e empreendedorismo.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="flex flex-col gap-6">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
