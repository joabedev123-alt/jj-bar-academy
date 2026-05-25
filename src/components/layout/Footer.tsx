import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BRAND, SOCIAL, FOOTER_LINKS, EMAIL, PHONE_DISPLAY, WEBSITE } from '../../data/siteConfig';

const SOCIAL_BUTTONS = [
  {
    name: 'YouTube', href: SOCIAL.youtube, color: '#FF0000',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
  {
    name: 'Instagram JJ', href: SOCIAL.instagram, color: '#E4405F',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
  },
  {
    name: 'Instagram Felipe', href: SOCIAL.instagramFelipe, color: '#E4405F',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
  },
  {
    name: 'WhatsApp', href: SOCIAL.whatsapp, color: '#25D366',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>,
  },
  {
    name: 'TikTok', href: SOCIAL.tiktok, color: '#69C9D0',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
  },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <footer ref={ref} id="contato" className="relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div style={{ height:'1px', background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)' }} />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
        style={{ background:'radial-gradient(ellipse at center top,rgba(201,168,76,0.05) 0%,transparent 70%)' }}
      />

      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 py-12 md:py-20">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-sm flex-shrink-0"
                style={{ background:'linear-gradient(135deg,#C9A84C,#8B6914)', boxShadow:'0 0 22px rgba(201,168,76,0.3)' }}
              >
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                  <path d="M17 8h1a4 4 0 0 1 0 8h-1" stroke="#080808" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" stroke="#080808" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="6" y1="1" x2="6" y2="4" stroke="#080808" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="10" y1="1" x2="10" y2="4" stroke="#080808" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="14" y1="1" x2="14" y2="4" stroke="#080808" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="gold-text font-bold" style={{ fontFamily:"'Bebas Neue',sans-serif", letterSpacing:'0.13em', fontSize:'1.25rem' }}>
                  {BRAND.name}
                </div>
                <div style={{ color:'var(--text-muted)', letterSpacing:'0.22em', fontSize:'0.52rem', textTransform:'uppercase' }}>
                  {BRAND.tagline}
                </div>
              </div>
            </div>

            <p
              className="mb-7 max-w-xs"
              style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'0.95rem', color:'rgba(245,240,232,0.38)', lineHeight:1.75, fontStyle:'italic', fontWeight:300 }}
            >
              {BRAND.description}
            </p>

            {/* Social */}
            <div className="flex gap-2.5 flex-wrap mb-7">
              {SOCIAL_BUTTONS.map((s, i) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-300 cursor-pointer"
                  style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)', color:'var(--text-muted)', textDecoration:'none' }}
                  whileHover={{ background:`${s.color}18`, borderColor:`${s.color}50`, color: s.color, scale: 1.1, boxShadow:`0 0 14px ${s.color}22` } as any}
                  title={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

            {/* Contact */}
            <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dark)" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span style={{ fontSize:'0.7rem', color:'var(--text-muted)' }}>{PHONE_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dark)" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <span style={{ fontSize:'0.7rem', color:'var(--text-muted)' }}>{EMAIL}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dark)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <a href={`https://${WEBSITE}`} target="_blank" rel="noopener noreferrer" style={{ fontSize:'0.7rem', color:'var(--text-muted)', textDecoration:'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {WEBSITE}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Links columns */}
          {FOOTER_LINKS.map((col, ci) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 + ci * 0.12, duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-4 h-px" style={{ background:'var(--gold-primary)' }} />
                <h4 style={{ color:'var(--gold-primary)', fontSize:'0.72rem', letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:600 }}>
                  {col.title}
                </h4>
              </div>
              <ul style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      style={{ display:'flex', alignItems:'center', gap:'8px', fontSize:'0.78rem', color:'rgba(245,240,232,0.38)', textDecoration:'none', transition:'color 0.2s' }}
                      whileHover={{ x: 3, color: 'rgba(201,168,76,0.85)' } as any}
                    >
                      <span style={{ width:'5px', height:'5px', borderRadius:'50%', background:'var(--gold-dark)', flexShrink:0, display:'block' }} />
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid rgba(201,168,76,0.07)', paddingTop:'22px', paddingBottom:'22px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p style={{ fontSize:'0.74rem', color:'var(--text-muted)', letterSpacing:'0.06em' }}>
              © {new Date().getFullYear()} {BRAND.name} {BRAND.tagline}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-5">
              {['Privacidade', 'Termos', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{ fontSize:'0.72rem', color:'var(--text-muted)', textDecoration:'none', letterSpacing:'0.1em', textTransform:'uppercase', transition:'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {item}
                </a>
              ))}
            </div>
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-sm"
              style={{ background:'rgba(201,168,76,0.05)', border:'1px solid rgba(201,168,76,0.14)' }}
            >
              <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--gold-primary)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span style={{ fontSize:'0.66rem', color:'var(--gold-primary)', letterSpacing:'0.15em', textTransform:'uppercase' }}>
                Plataforma Premium
              </span>
            </div>
          </motion.div>

          {/* Credits */}
          <div style={{ borderTop:'1px solid rgba(201,168,76,0.04)', paddingTop:'14px', textAlign:'center' }}>
            <a
              href="https://camaly.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize:'0.72rem', color:'var(--text-muted)', textDecoration:'none', letterSpacing:'0.08em', transition:'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              Produzida com 💛 por CAMALY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
