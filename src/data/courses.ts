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
    title: "Curso completo de Bartender e barista",
    subtitle: "Teórico e Prático",
    category: "Fundamentos",
    badge: "MAIS VENDIDO",
    description: "Do zero à excelência. Domine as artes do bar e da cafeteria com técnicas profissionais, flair e introdução sensorial.",
    items: [
      "Bartender completo teórico e prático",
      "Flair e working flair (com Rafael Andrade Bob flair)",
      "Barista completo teórico e prático",
      "Introdução sensorial (Ensei Neto)",
      "Criação de drinks exclusivos",
      "+Bônus exclusivos"
    ],
    image: "/courses/bartender-barista.jpeg",
    gradient: "from-amber-900/80 via-black/60 to-black",
    accentColor: "#C9A84C",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 2,
    title: "Mixologia",
    subtitle: "Alta Coquetelaria",
    category: "Avançado",
    badge: "PREMIUM",
    description: "Eleve sua coquetelaria a outro nível. Fature alto com consultorias ou como mixologista criando experiências sensoriais exclusivas.",
    items: [
      "Coquetelaria avançada e molecular",
      "Fature alto com consultorias ou como mixologista",
      "Esferificação básica e inversa",
      "Gelificação, texturas e defumação artesanal",
      "Espumas e ares sensoriais",
      "+Bônus laboratório"
    ],
    image: "/courses/Mixologia.jpeg",
    gradient: "from-purple-900/80 via-black/60 to-black",
    accentColor: "#9B59B6",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 3,
    title: "Gelos translúcidos",
    subtitle: "Arte e Negócio",
    category: "Especialização",
    badge: "LUCRATIVO",
    description: "Transforme gelos translúcidos em um negócio lucrativo. Produção artesanal de gelos premium para bares, restaurantes e eventos.",
    items: [
      "Produção de gelos translúcidos",
      "Transforme gelos translúcidos em um negócio lucrativo",
      "Método prático passo a passo",
      "Equipamentos e fornecedores",
      "Precificação e vendas",
      "+Bônus negócio"
    ],
    image: "/courses/gelos-translucidos.jpeg",
    gradient: "from-cyan-900/80 via-black/60 to-black",
    accentColor: "#00BCD4",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 4,
    title: "Empreendedorismo e renda extra",
    subtitle: "Negócios e Operações",
    category: "Negócios",
    badge: "NOVO",
    description: "Como montar uma empresa de Bartender, Barista, Bar, Cafeteria e Restaurante, importações e operações de ecommerce.",
    items: [
      "Como montar uma empresa de Bartender",
      "Como montar uma empresa de barista",
      "Como montar um bar, cafeteria e restaurante",
      "Importação da China, Paraguai e USA",
      "Impressora 3D, transfer e sublimação",
      "Montando uma empresa de produtos personalizados e operações de ecomerce",
      "+Bônus"
    ],
    image: "/courses/empreendedorismo.jpeg",
    gradient: "from-yellow-900/80 via-black/60 to-black",
    accentColor: "#F39C12",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 5,
    title: "Mentoria",
    subtitle: "Aceleração de Negócios",
    category: "Mentoria",
    badge: "EXCLUSIVO",
    description: "Mentoria e consultoria especializada para iniciar ou escalar negócios de Bar, Cafeteria, Restaurante ou Ecommerce.",
    items: [
      "Mentoria para iniciar ou escalar o seu negócio de Bar, Cafeteria, Restaurante ou Ecomerce",
      "Consultoria para empresas, bares e restaurantes",
      "Grupos de treinamento",
      "Cursos presenciais"
    ],
    image: "/courses/Mentoria.jpeg",
    gradient: "from-rose-900/80 via-black/60 to-black",
    accentColor: "#E74C3C",
    ctaLabel: "QUERO MENTORIA"
  },
  {
    id: 6,
    title: "Latte Art",
    subtitle: "Técnicas na Prática",
    category: "Barista",
    badge: "CRIATIVO",
    description: "Aprenda o que é Latte Art, como produzir desenhos no café e domine todas as técnicas na prática com excelência.",
    items: [
      "O que é Latte Art",
      "Como produzir desenhos no café",
      "Técnicas na prática",
      "+Bônus"
    ],
    image: "/courses/latte-art.jpeg",
    gradient: "from-orange-900/80 via-black/60 to-black",
    accentColor: "#E67E22",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 7,
    title: "Franquia JJ Barista/ Drop de Ecommerce",
    subtitle: "Modelos Exclusivos",
    category: "Negócios",
    badge: "FRANQUIA",
    description: "Tenha sua própria cafeteria JJ Barista em modelos exclusivos ou fature alto revendendo produtos no drop da JJ.",
    items: [
      "Tenha a sua própria cafeteria JJ Barista em 3 modelos de negócio exclusivos",
      "Compre produtos com margem no drop da JJ para revender ou criar o seu próprio negócio e faturar alto"
    ],
    image: "/courses/franquia.jpeg",
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
    description: "Metodologia completa para exercer profissões em alto mar nas categorias de Alimentos e Bebidas.",
    items: [
      "Como se preparar para iniciar uma carreira em alto mar",
      "Vida a bordo",
      "Metodologia completa para exercer profissões em alto mar nas categoria de Alimentos e Bebidas",
      "+Bônus"
    ],
    image: "/courses/cruzeiros.jpeg",
    gradient: "from-blue-900/80 via-black/60 to-black",
    accentColor: "#2980B9",
    ctaLabel: "QUERO EMBARCAR"
  },
  {
    id: 9,
    title: "Licitações",
    subtitle: "Vendas Governamentais",
    category: "Negócios",
    badge: "GOVERNO",
    description: "Aprenda como participar de licitações, ganhar pregões e escalar sua empresa de alimentos e bebidas vendendo pro governo.",
    items: [
      "Como participar de licitações",
      "Como ganhar pregões",
      "Como escalar uma empresa de alimentos e bebidas vendendo pro Governo",
      "+Bônus"
    ],
    image: "/courses/licitacoes.jpeg",
    gradient: "from-slate-900/80 via-black/60 to-black",
    accentColor: "#95A5A6",
    ctaLabel: "QUERO APRENDER"
  },
  {
    id: 10,
    title: "IA para Bar, cafeterias, restaurantes e eventos",
    subtitle: "Inovação na Prática",
    category: "Inovação",
    badge: "INOVAÇÃO",
    description: "Aprenda a escalar o seu negócio através da IA com ferramentas específicas para profissionais e empreendedores de A&B.",
    items: [
      "Aprenda a escalar o seu negócio através da IA",
      "IA's específicas para profissionais e empreendedores do segmento de alimentos e bebidas",
      "Execução na prática",
      "+Bônus"
    ],
    image: "/courses/ia.jpeg",
    gradient: "from-violet-900/80 via-black/60 to-black",
    accentColor: "#8E44AD",
    ctaLabel: "QUERO O FUTURO"
  },
  {
    id: 11,
    title: "Grupo Vip Gratuito",
    subtitle: "Comunidade e Conexões",
    category: "Comunidade",
    badge: "GRÁTIS",
    description: "Comunidade exclusiva com bartenders, baristas, empreendedores e mural de oportunidades no mercado.",
    items: [
      "Bartenders, baristas e Empreendedores + mural de oportunidades"
    ],
    image: "/courses/grupo-vip.jpeg",
    gradient: "from-teal-900/80 via-black/60 to-black",
    accentColor: "#1ABC9C",
    ctaLabel: "ENTRAR GRÁTIS"
  },
  {
    id: 12,
    title: "Canal no YouTube",
    subtitle: "Conteúdo Exclusivo JJ",
    category: "Conteúdo",
    badge: "YOUTUBE",
    description: "Fique por dentro de tudo que rola no Universo da JJ e aprenda muito com conteúdos enriquecedores semanais.",
    items: [
      "Se inscreva no nosso canal do You tube, para ficar por dentro de tudo que rola no Universo da JJ e aprender muito com conteúdos enriquecedores"
    ],
    image: "/courses/youtube.jpeg",
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
