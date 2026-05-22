// ============================================================
//  SITE CONFIG — edite aqui qualquer texto, número ou link
//  Salve o arquivo e o browser atualiza automaticamente.
// ============================================================

// ── CONTATO ─────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '5511999999999'   // ex: 5511987654321
export const WHATSAPP_MESSAGE = 'Olá! Tenho interesse nos cursos da JJ Bar & Barista Academy. Poderia me passar mais informações?'
export const EMAIL = 'contato@jjbarbarista.com.br'
export const PHONE_DISPLAY = '(11) 99999-9999'

// ── MARCA ────────────────────────────────────────────────────
export const BRAND = {
  name: 'JJ BAR & BARISTA',
  tagline: 'STORE & ACADEMY',
  description: 'A maior plataforma premium de bartender, barista e empreendedorismo do Brasil. Transformando paixão em profissão lucrativa.',
}

// ── REDES SOCIAIS ────────────────────────────────────────────
export const SOCIAL = {
  youtube:   'https://youtube.com/@jjbarbarista',
  instagram: 'https://instagram.com/jjbarbarista',
  whatsapp:  `https://wa.me/${WHATSAPP_NUMBER}`,
  tiktok:    'https://tiktok.com/@jjbarbarista',
}

// ── NAVBAR ───────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Cursos',     href: '#cursos' },
  { label: 'Mentoria',   href: '#mentoria' },
  { label: 'Franquia',   href: '#franquia' },
  { label: 'IA',         href: '#ia' },
  { label: 'Cruzeiros',  href: '#cruzeiros' },
  { label: 'Licitações', href: '#licitacoes' },
  { label: 'YouTube',    href: SOCIAL.youtube },
  { label: 'Grupo VIP',  href: '#vip' },
  { label: 'Contato',    href: '#contato' },
]

export const NAV_CTA = 'QUERO ACESSAR'

// ── HERO ─────────────────────────────────────────────────────
export const HERO = {
  badge:    'JJ BAR & BARISTA',
  title:    ['DOMINE O UNIVERSO', 'DE BARTENDER,', 'BARISTA E', 'EMPREENDEDORISMO'],
  subtitle: 'Transforme sua paixão em uma profissão lucrativa através da maior plataforma premium do segmento no Brasil.',
  cta_primary:   'QUERO COMEÇAR',
  cta_secondary: 'VER CURSOS',
  // URL da imagem de fundo do hero (Unsplash ou upload próprio)
  image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=85&auto=format',
  stats: [
    { value: '12+',  label: 'Cursos Premium' },
    { value: '15K+', label: 'Alunos Formados' },
    { value: '98%',  label: 'Satisfação' },
    { value: '8+',   label: 'Anos de Experiência' },
  ],
}

// ── CARROSSEL — CATEGORIAS ───────────────────────────────────
export const CAROUSEL_CATEGORIES = [
  'Todos',
  'Bartender',
  'Barista',
  'Mixologia',
  'Latte Art',
  'IA',
  'Negócios',
  'Cruzeiros',
  'Franquia',
]

// Intervalo do auto-scroll em milissegundos
export const CAROUSEL_INTERVAL_MS = 2800

// ── SEÇÃO DE CURSOS — CABEÇALHO ──────────────────────────────
export const COURSES_SECTION = {
  eyebrow:     'Currículo Completo',
  title:       'TODOS OS CURSOS',
  description: 'Uma plataforma completa para dominar cada faceta do universo de bares, cafeterias e empreendedorismo.',
}

// ── ESTATÍSTICAS ─────────────────────────────────────────────
export const STATS = [
  { value: 15000, suffix: '+',  label: 'Alunos Formados' },
  { value: 98,    suffix: '%',  label: 'Taxa de Satisfação' },
  { value: 12,    suffix: '+',  label: 'Cursos Premium' },
  { value: 8,     suffix: '+',  label: 'Anos de Experiência' },
  { value: 60,    suffix: 'h+', label: 'Horas de Conteúdo' },
  { value: 4,     suffix: 'K+', label: 'Membros VIP' },
]

export const STATS_SECTION = {
  eyebrow:    'Números que provam',
  title:      'A MAIOR PLATAFORMA',
  titleGold:  'PREMIUM',
  subtitle:   'DO SEGMENTO NO BRASIL',
  cta_label:  'ACESSAR PLATAFORMA',
  cta_eyebrow:'Comece sua transformação hoje',
  cta_title:  'INVISTA NO SEU',
  cta_titleGold: 'FUTURO AGORA',
  cta_sub:    'Acesso vitalício a todos os cursos, certificados reconhecidos e suporte da comunidade.',
}

// ── DEPOIMENTOS ──────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name:   'Rafael Mendes',
    role:   'Bartender Profissional',
    text:   'O curso transformou minha carreira completamente. Em 6 meses triplicei minha renda.',
    avatar: 'RM',
    stars:  5,
  },
  {
    name:   'Camila Torres',
    role:   'Proprietária de Cafeteria',
    text:   'Aprendi tudo que precisava para abrir meu próprio negócio. Hoje faturamos 5 dígitos.',
    avatar: 'CT',
    stars:  5,
  },
  {
    name:   'Lucas Ferreira',
    role:   'Barista Campeão Regional',
    text:   'As técnicas de latte art me levaram a ganhar competições estaduais. Conteúdo de elite.',
    avatar: 'LF',
    stars:  5,
  },
]

// ── STRIP DE BENEFÍCIOS (embaixo do carrossel) ────────────────
export const BENEFITS_STRIP = [
  { value: '12+',        label: 'Módulos Premium' },
  { value: '60h+',       label: 'Conteúdo em Vídeo' },
  { value: 'Acesso',     label: 'Vitalício' },
  { value: 'Certificado',label: 'Incluso' },
]

// ── FOOTER ───────────────────────────────────────────────────
export const FOOTER_LINKS = [
  {
    title: 'Cursos',
    links: [
      { label: 'Bartender & Barista',   href: '#cursos' },
      { label: 'Mixologia Molecular',   href: '#cursos' },
      { label: 'Latte Art',             href: '#cursos' },
      { label: 'Gelos Translúcidos',    href: '#cursos' },
      { label: 'IA para Negócios',      href: '#ia' },
      { label: 'Profissional de Cruzeiros', href: '#cruzeiros' },
    ],
  },
  {
    title: 'Negócios',
    links: [
      { label: 'Empreendedorismo',    href: '#cursos' },
      { label: 'Franquia JJ Barista', href: '#franquia' },
      { label: 'Licitações',          href: '#licitacoes' },
      { label: 'Mentoria Exclusiva',  href: '#mentoria' },
      { label: 'Ecommerce & Revenda', href: '#cursos' },
    ],
  },
  {
    title: 'Comunidade',
    links: [
      { label: 'Grupo VIP Gratuito', href: '#vip' },
      { label: 'Canal YouTube',      href: SOCIAL.youtube },
      { label: 'Instagram',          href: SOCIAL.instagram },
      { label: 'WhatsApp VIP',       href: SOCIAL.whatsapp },
    ],
  },
]
