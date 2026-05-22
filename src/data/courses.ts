export interface Course {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  description: string;
  items: string[];
  image: string;
  gradient: string;
  accentColor: string;
  ctaLabel?: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Bartender & Barista Completo",
    subtitle: "Teórico e Prático",
    category: "Fundamentos",
    badge: "MAIS VENDIDO",
    description: "Do zero à excelência. Domine as artes do bar e da cafeteria com técnicas profissionais e flair.",
    items: ["Bartender completo teórico e prático", "Flair e working flair", "Barista completo teórico e prático", "Introdução sensorial ao café", "Criação de drinks exclusivos", "+Bônus exclusivos"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    gradient: "from-amber-900/80 via-black/60 to-black",
    accentColor: "#C9A84C",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 2,
    title: "Mixologia Molecular",
    subtitle: "Alta Coquetelaria",
    category: "Avançado",
    badge: "PREMIUM",
    description: "Eleve sua coquetelaria a outro nível com técnicas moleculares e criações avant-garde.",
    items: ["Coquetelaria molecular avançada", "Esferificação básica e inversa", "Gelificação e texturas", "Defumação artesanal", "Espumas e ares sensoriais", "+Bônus laboratório"],
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80",
    gradient: "from-purple-900/80 via-black/60 to-black",
    accentColor: "#9B59B6",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 3,
    title: "Gelos Translúcidos",
    subtitle: "Arte e Negócio",
    category: "Especialização",
    badge: "LUCRATIVO",
    description: "Transforme gelo em arte e negócio. Produção artesanal de gelos premium para bares e eventos.",
    items: ["Produção de gelos translúcidos", "Método prático passo a passo", "Montagem do negócio lucrativo", "Equipamentos e fornecedores", "Precificação e vendas", "+Bônus negócio"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
    gradient: "from-cyan-900/80 via-black/60 to-black",
    accentColor: "#00BCD4",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 4,
    title: "Empreendedorismo e Renda Extra",
    subtitle: "Negócios Premium",
    category: "Negócios",
    badge: "NOVO",
    description: "Monte seu império no setor de A&B. De bartender freelancer a empresário do segmento.",
    items: ["Empresa de bartender/barista", "Bar, cafeteria e restaurante", "Importação e revenda", "Impressora 3D aplicada", "Ecommerce e dropshipping", "+Bônus empreendedor"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    gradient: "from-yellow-900/80 via-black/60 to-black",
    accentColor: "#F39C12",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 5,
    title: "Mentoria Exclusiva",
    subtitle: "Aceleração de Negócios",
    category: "Mentoria",
    badge: "EXCLUSIVO",
    description: "Mentoria direta com JJ para escalar seu negócio no universo de bares e cafeterias.",
    items: ["Escalar negócios de A&B", "Consultoria personalizada", "Treinamentos para equipes", "Implantação de cursos presenciais", "Acompanhamento estratégico", "Acesso VIP"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    gradient: "from-rose-900/80 via-black/60 to-black",
    accentColor: "#E74C3C",
    ctaLabel: "QUERO MENTORIA"
  },
  {
    id: 6,
    title: "Latte Art",
    subtitle: "Técnica e Expressão",
    category: "Arte",
    badge: "CRIATIVO",
    description: "Transforme cada xícara em uma obra de arte. Técnicas profissionais de latte art do zero ao avançado.",
    items: ["O que é Latte Art profissional", "Desenhos básicos e avançados", "Técnicas de textura do leite", "Pouring e etching", "Competição e portfólio", "+Bônus café especial"],
    image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=800&q=80",
    gradient: "from-orange-900/80 via-black/60 to-black",
    accentColor: "#E67E22",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 7,
    title: "Franquia JJ Barista",
    subtitle: "Ecommerce & Franquia",
    category: "Negócios",
    badge: "FRANQUIA",
    description: "Faça parte da rede JJ ou monte seu próprio negócio. Modelos validados de cafeterias lucrativas.",
    items: ["Modelos de cafeteria premium", "Sistema de franquia JJ", "Revenda de produtos", "Drop shipping especializado", "Ecommerce estruturado", "Negócio escalável"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    gradient: "from-emerald-900/80 via-black/60 to-black",
    accentColor: "#27AE60",
    ctaLabel: "QUERO FRANQUIA"
  },
  {
    id: 8,
    title: "Profissional de Cruzeiros",
    subtitle: "Carreira em Alto Mar",
    category: "Carreira",
    badge: "INTERNACIONAL",
    description: "Trabalhe nos maiores cruzeiros do mundo. Carreira internacional no setor de A&B marítimo.",
    items: ["Carreira em alto mar", "Vida a bordo nos cruzeiros", "Alimentos e bebidas naval", "Certificações internacionais", "Como conseguir o emprego", "+Bônus carreira"],
    image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80",
    gradient: "from-blue-900/80 via-black/60 to-black",
    accentColor: "#2980B9",
    ctaLabel: "QUERO EMBARCAR"
  },
  {
    id: 9,
    title: "Licitações",
    subtitle: "Contratos Governamentais",
    category: "Negócios",
    badge: "AVANÇADO",
    description: "Ganhe contratos milionários com o governo. Aprenda a participar e vencer licitações públicas.",
    items: ["Participar de licitações públicas", "Ganhar pregões eletrônicos", "Escalar empresa via licitações", "Documentação necessária", "Estratégias vencedoras", "+Bônus contratos"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    gradient: "from-slate-900/80 via-black/60 to-black",
    accentColor: "#95A5A6",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 10,
    title: "IA para Bares e Cafeterias",
    subtitle: "Futuro dos Negócios",
    category: "Inovação",
    badge: "TENDÊNCIA",
    description: "Use inteligência artificial para escalar seu bar ou cafeteria. O futuro do setor já chegou.",
    items: ["Escalar negócio com IA", "IA para alimentos e bebidas", "Automação de processos", "Marketing com IA", "Execução prática imediata", "+Bônus ferramentas IA"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    gradient: "from-violet-900/80 via-black/60 to-black",
    accentColor: "#8E44AD",
    ctaLabel: "QUERO O FUTURO"
  },
  {
    id: 11,
    title: "Grupo VIP Gratuito",
    subtitle: "Comunidade Premium",
    category: "Comunidade",
    badge: "GRÁTIS",
    description: "Junte-se à maior comunidade de profissionais de bartender e barista do Brasil.",
    items: ["Networking premium", "Oportunidades de trabalho", "Comunidade ativa", "Conteúdos exclusivos", "Sorteios e benefícios", "Acesso imediato"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
    gradient: "from-teal-900/80 via-black/60 to-black",
    accentColor: "#1ABC9C",
    ctaLabel: "ENTRAR GRÁTIS"
  },
  {
    id: 12,
    title: "Canal YouTube JJ",
    subtitle: "Conteúdo Gratuito",
    category: "Conteúdo",
    badge: "YOUTUBE",
    description: "Aprenda gratuitamente com o maior canal de bartender e barista do Brasil.",
    items: ["Conteúdos educativos semanais", "Bastidores exclusivos", "Aulas práticas gratuitas", "Receitas e técnicas", "Universo JJ completo", "Se inscreva agora"],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    gradient: "from-red-900/80 via-black/60 to-black",
    accentColor: "#E53E3E",
    ctaLabel: "VER CANAL"
  }
];

export const carouselCategories = [
  { label: "Todos", icon: "bi-grid-3x3-gap" },
  { label: "Bartender", icon: "bi-cup-straw" },
  { label: "Barista", icon: "bi-cup-hot" },
  { label: "Mixologia", icon: "bi-droplet" },
  { label: "Latte Art", icon: "bi-palette" },
  { label: "IA", icon: "bi-cpu" },
  { label: "Negócios", icon: "bi-briefcase" },
  { label: "Cruzeiros", icon: "bi-water" },
  { label: "Franquia", icon: "bi-shop" },
];
