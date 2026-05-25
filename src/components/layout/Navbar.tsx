import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, NAV_CTA, BRAND, waUrl } from '../../data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string, label: string) => {
    setActiveLink(label);
    setMobileOpen(false);
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'rgba(8,8,8,0.3)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.6)' : 'none',
        }}
      >
        <div
          className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-8"
          style={{ padding: scrolled ? '12px 32px' : '18px 32px', transition: 'padding 0.4s ease' }}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer select-none flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNav('#home', 'Home')}
          >
            <div
              className="w-9 h-9 flex items-center justify-center rounded-sm flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#C9A84C,#8B6914)', boxShadow: '0 0 18px rgba(201,168,76,0.4)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M17 8h1a4 4 0 0 1 0 8h-1" stroke="#080808" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" stroke="#080808" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="1" x2="6" y2="4" stroke="#080808" strokeWidth="2" strokeLinecap="round"/>
                <line x1="10" y1="1" x2="10" y2="4" stroke="#080808" strokeWidth="2" strokeLinecap="round"/>
                <line x1="14" y1="1" x2="14" y2="4" stroke="#080808" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="gold-text font-bold" style={{ fontFamily:"'Bebas Neue',sans-serif", letterSpacing:'0.14em', fontSize:'1.05rem' }}>
                {BRAND.name}
              </div>
              <div style={{ color:'var(--text-muted)', letterSpacing:'0.18em', fontSize:'0.6rem', textTransform:'uppercase' }}>
                {BRAND.tagline}
              </div>
            </div>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.slice(0, 7).map((link) => (
              <motion.button
                key={link.label}
                onClick={() => handleNav(link.href, link.label)}
                className="relative text-xs tracking-widest uppercase cursor-pointer transition-colors duration-200"
                style={{
                  color: activeLink === link.label ? 'var(--gold-primary)' : 'rgba(245,240,232,0.55)',
                  letterSpacing: '0.1em',
                  background: 'none',
                  border: 'none',
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 500,
                  fontSize: '0.7rem',
                }}
                whileHover={{ y: -1, color: 'var(--gold-primary)' } as any}
              >
                {link.label}
                {activeLink === link.label && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: 'var(--gold-primary)' }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA + mobile */}
          <div className="flex items-center gap-3">
            <motion.button
              className="hidden md:flex btn-gold items-center gap-2"
              style={{ borderRadius: '2px', fontSize: '0.72rem', padding: '11px 24px' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(waUrl('Olá! Vim através do site JJ Bar & Barista Academy e gostaria de conhecer a plataforma.'), '_blank', 'noopener,noreferrer')}
            >
              {NAV_CTA}
            </motion.button>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none' }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="block h-px"
                  style={{ background: 'var(--gold-primary)', width: i === 1 ? '16px' : '22px' }}
                  animate={{
                    rotate: mobileOpen && i === 0 ? 45 : mobileOpen && i === 2 ? -45 : 0,
                    y: mobileOpen && i === 0 ? 7 : mobileOpen && i === 2 ? -7 : 0,
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col pt-16 pb-8 px-6 overflow-y-auto"
            style={{ background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(30px)' }}
          >
            <div className="section-divider mb-6" />
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(link.href, link.label)}
                className="text-left py-4 cursor-pointer"
                style={{
                  color: activeLink === link.label ? 'var(--gold-primary)' : 'rgba(245,240,232,0.7)',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid rgba(201,168,76,0.08)',
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontSize: '0.92rem',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="btn-gold mt-8 w-full"
              style={{ borderRadius: '2px' }}
              onClick={() => window.open(waUrl('Olá! Vim através do site JJ Bar & Barista Academy e gostaria de conhecer a plataforma.'), '_blank', 'noopener,noreferrer')}
            >
              {NAV_CTA}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
