// ============================================================
//  SITE CONFIG — edite aqui qualquer texto, número ou link
//  Salve o arquivo e o browser atualiza automaticamente.
// ============================================================

// ── CONTATO ─────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '5511982911648'
export const WHATSAPP_MESSAGE = 'Olá! Vim através do site JJ Bar & Barista Academy e gostaria de mais informações.'

export function waUrl(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}
export const EMAIL = 'atendimento@jjbarebaristaacademy.com'
export const WEBSITE = 'www.jjbarebaristaacademy.com'
export const PHONE_DISPLAY = '+55 11 98291-1648'

// ── MARCA ────────────────────────────────────────────────────
export const BRAND = {
  name: 'JJ BAR & BARISTA',
  tagline: 'STORE & ACADEMY',
  description: 'A maior plataforma premium de bartender, barista e empreendedorismo do Brasil. Transformando paixão em profissão lucrativa.',
}

// ── REDES SOCIAIS ────────────────────────────────────────────
export const SOCIAL = {
  youtube:   'https://youtube.com/@jjbarebarista?si=uFC_dwoTcG6_zu0C',
  instagram:        'https://instagram.com/jjbarebaristastore_academy',
  instagramFelipe:  'https://instagram.com/felipemartins.barebarista',
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
  image: '/felipe1.png',
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
  { value: 100,   suffix: 'h+', label: 'Horas de Conteúdo' },
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
    name:   'Monique',
    role:   'Noiva e Empresária',
    text:   'Vocês arrasaram no meu casamento, sério, foi inesquecível, já quero fazer os cursos de vocês pra me tornar uma Bartender. Ou será uma empreendedora, pode? Hahaha. Oremos, ansiosa para começar.',
    avatar: 'MO',
    stars:  5,
  },
  {
    name:   'Guilherme',
    role:   'Bartender',
    text:   'Fiz o curso presencial com o Felipe, com o Bob e o Ensei, valeu galera, primeiro curso da minha carreira e já foi uma atitude positiva na minha vida colocando em prática todos os aprendizados. Obrigado mestres!!!',
    avatar: 'GU',
    stars:  5,
  },
  {
    name:   'Vitor',
    role:   'Empresário de Eventos e Cafeteria',
    text:   'Trabalhei na JJ depois montei meu próprio negócio. A JJ foi uma escola pra mim, cada evento, cada aprendizado, levo isso pra minha vida, além de valores, aprendi a ser um empreendedor na prática mesmo.',
    avatar: 'VI',
    stars:  5,
  },
]

// ── STRIP DE BENEFÍCIOS (embaixo do carrossel) ────────────────
export const BENEFITS_STRIP = [
  { value: '12+',        label: 'Módulos Premium' },
  { value: '15K',        label: 'Alunos formados' },
  { value: '99%',        label: 'de satisfação' },
  { value: '+20',        label: 'anos de experiencia' },
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
      { label: 'Instagram Oficial',   href: SOCIAL.instagram },
      { label: 'Instagram Felipe',    href: SOCIAL.instagramFelipe },
      { label: 'WhatsApp VIP',       href: SOCIAL.whatsapp },
    ],
  },
]
