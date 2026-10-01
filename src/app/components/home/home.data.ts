export interface TermLine {
  text: string;
  color: string;
}

export interface Project {
  num: string;
  kind: string;
  name: string;
  desc: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  art: string;
  web: string;
}

export interface Service {
  name: string;
  price: string;
  unit: string;
  altPrice: string;
  desc: string;
  items: string[];
  cta: string;
  featured: boolean;
}

export const TERM_COLORS = {
  ok: '#3ED0C7',
  dim: '#9B94A8',
  txt: '#F5F1FA',
  warn: '#C68A00',
  brand: '#C4A3E8',
};

export const PROJECTS: Project[] = [
  {
    num: '01',
    kind: 'Albúm para Bodas · Producto propio',
    name: 'Albúm de fotos',
    desc: 'Panel web para que los usuarios suban sus fotos tomadas en el evento y las compartan con sus invitados. Todo en tiempo real, sin necesidad de refrescar la página.',
    metric: '',
    metricLabel: 'Almacenamiento en tiempo real de fotos',
    tags: ['Angular JS.', 'Firebase'],
    art: 'linear-gradient(135deg,#2A1848 0%,#542F87 100%)',
    web: 'https://bodaalexismireya.web.app/',
  },
  {
    num: '02',
    kind: 'Organizador · Producto propio',
    name: 'Organizador de Invitados',
    desc: 'Proporciona uns distribución según el número de mesas y la cantidad de invitador organizandolos de manera equitativa. Permite agregar invitados, asignarles una mesa y generar un PDF con la distribución final.',
    metric: '',
    metricLabel: 'Guardar en PDF',
    tags: ['Angular JS.', 'Firebase'],
    art: 'linear-gradient(135deg,#007F78 0%,#00B8AD 100%)',
    web: 'https://bodaalexismireya-mesas.web.app/',
  },
  {
    num: '03',
    kind: 'Altas de clientes · Interno',
    name: 'Monitor de clientes',
    desc: 'Por medio de base de datos sql mostramos un panel web donde los supervisores revisan la información y dan conformidad, dicha plataforma tiene integración con SAP para la actualización de los datos de los clientes, eliminando trabajo manual y errores de digitación.',
    metric: '',
    metricLabel: 'Aprobación con un click',
    tags: ['Angular JS.', 'Docker', 'SQL', '.NET Core', 'SAP'],
    art: 'linear-gradient(135deg,#3D2166 0%,#00B8AD 100%)',
    web: '',
  },
  {
    num: '04',
    kind: 'Monitor Corporativos',
    name: 'Moódulos a necesidad del cliente',
    desc: 'Trabajo con arquitectura de microservicios, donde cada módulo es independiente y se comunica con los demás por medio de API Rest, permitiendo que el cliente pueda tener un control total de su negocio y sus procesos.',
    metric: '',
    metricLabel: 'Información en tiempo real',
    tags: ['Angular JS.', '.NET Core', 'SQL', 'Docker', 'Microservicios'],
    art: 'linear-gradient(135deg,#542F87 0%,#8A5BC5 100%)',
    web: '',
  },
  {
    num: '05',
    kind: 'Telegram',
    name: 'Bot de Telegram - Precio criptomonedas',
    desc: 'Bot de Telegram que permite a los usuarios consultar el precio de las criptomonedas en tiempo real, utilizando la API de CoinGecko para obtener los datos más recientes. El bot responde a comandos específicos y proporciona información detallada sobre cada criptomoneda.',
    metric: '',
    metricLabel: 'Precio rango de 1 hora en tiempo real',
    tags: ['Python', 'Telegram API', 'CoinGecko API'],
    art: 'linear-gradient(135deg,#542F87 0%,#8A5BC5 100%)',
    web: 'https://t.me/denzel2910_Bot',
  },
  {
    num: '06',
    kind: 'Atomatizador',
    name: 'Bot de Telegram - Noticias para LinkedIn',
    desc: 'Bot de Telegram que permite a los usuarios recibir notificaciones sobre las últimas noticias del mundo de la tecnología y el desarrollo profesional.',
    metric: '',
    metricLabel: 'Notificaciones en tiempo real',
    tags: ['N8N', 'Telegram API', 'LinkedIn API'],
    art: 'linear-gradient(135deg,#542F87 0%,#8A5BC5 100%)',
    web: 'https://t.me/Lin_kedin_bot',
  },
];

export const STACK = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'NestJS',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'GraphQL',
  'Docker',
  'AWS',
  'React Native',
  'CI/CD',
];

export const FILTERS = ['Todos', 'Docker', 'Telegram API', 'SQL', 'Python', 'Angular', 'N8N'];

export const STATS = [
  { value: 5, suffix: '+', label: 'años escribiendo código' },
  { value: 20, suffix: '+', label: 'proyectos entregados' },
  { value: 100, suffix: '%', label: 'del stack, una sola persona' },
];

export const TYPE_PHRASES = [
  'npx crear-tu-producto',
  'deploy → producción ✓',
  'del diseño al deploy, solo',
  'hablemos de tu idea',
];

export const SERVICES: Service[] = [
  {
    name: 'Sprint de producto',
    price: 'USD 1.200',
    unit: '/ semana',
    altPrice: 'A medida',
    desc: 'Para cuando ya sabés qué querés y necesitás que avance rápido.',
    items: [
      'Una semana full dedicada a tu producto',
      'Demo funcionando al cierre',
      'Reporte diario de avance',
      'Cancelás cuando quieras',
    ],
    cta: 'Reservar una semana',
    featured: false,
  },
  {
    name: 'Proyecto completo',
    price: 'desde USD 4.500',
    unit: '',
    altPrice: 'Presupuesto cerrado',
    desc: 'De la idea al deploy: diseño, desarrollo, base de datos y puesta en producción.',
    items: [
      'Alcance y presupuesto cerrado',
      'Diseño de interfaz incluido',
      'Backend, base de datos y deploy',
      '30 días de garantía post-lanzamiento',
    ],
    cta: 'Pedir propuesta',
    featured: true,
  },
  {
    name: 'Soporte mensual',
    price: 'USD 900',
    unit: '/ mes',
    altPrice: 'Según alcance',
    desc: 'Ya tenés el producto vivo y querés a alguien que lo cuide y lo haga crecer.',
    items: [
      'Mejoras y features chicas',
      'Monitoreo y corrección de bugs',
      'Actualizaciones de seguridad',
      'Respuesta en menos de 24 h',
    ],
    cta: 'Charlemos',
    featured: false,
  },
];

export const TIMELINE = [
  {
    when: '2024 — hoy',
    role: 'Desarrollador Analista Web',
    org: 'G.W.Yichang & Cia S.A. ',
    what: 'Integraciones Web y SAP, desarrollo de aplicaciones web y móviles, mantenimiento de sistemas internos.',
    dot: '#00B8AD',
  },
  {
    when: '2022 — 2024',
    role: 'Fullstack semi-senior - Freelance',
    org: 'Empresas y startups de LATAM',
    what: 'Creación de páginas web para empresas y startups, con foco en performance, accesibilidad y escalabilidad. Desarrollo de aplicaciones web y móviles.',
    dot: '#542F87',
  },
  {
    when: '2021 — 2022',
    role: 'Desarrollador frontend',
    org: 'Agencia digital (Ecommerce y marketing)',
    what: 'Interfaces para clientes de retail y servicios, con foco en performance y accesibilidad.',
    dot: '#8A5BC5',
  },
  {
    when: '2020',
    role: 'Prácticante',
    org: 'Municipalidad Distrital de Comas',
    what: 'Mantenimiento de sistemas internos y la página web institucional',
    dot: '#CFC9D6',
  },
];

export const FACTS = [
  { label: 'Base', value: 'Remoto · LATAM' },
  { label: 'Idiomas', value: 'Español' },
  { label: 'Respondo en', value: '< 24 horas' },
];

export const NOTES = [
  {
    tag: 'Udemy',
    date: 'dic 2025',
    read: '5 horas',
    title: 'N8N : Crear Agentes de IA y automatización de flujos',
    excerpt: 'Curso sobre cómo crear agentes de inteligencia artificial y automatizar flujos de trabajo utilizando N8N.',
  },
  {
    tag: 'Udemy',
    date: 'dic 2025',
    read: '13 horas',
    title: 'AWS CERTIFIED CLOUD PRACTITIONER CLF-C02',
    excerpt: 'Curso de preparación para la certificación AWS Certified Cloud Practitioner, que cubre los fundamentos de la nube y los servicios de AWS.',
  },
  {
    tag: 'Google Cloud',
    date: 'oct 2025',
    read: '3 horas',
    title: 'DOMINA LA IA CON GEMINI',
    excerpt: 'Curso sobre cómo dominar la inteligencia artificial utilizando la plataforma Gemini de Google Cloud.',
  },
  {
    tag: 'Cisco',
    date: 'oct 2025',
    read: '3 horas',
    title: 'INTRODUCCIPON A LA CIENCIA DE DATOS',
    excerpt: 'Curso introductorio a la ciencia de datos, que cubre conceptos básicos y técnicas utilizadas en el análisis de datos.',
  },
  {
    tag: 'Cisco',
    date: 'ago 2025',
    read: '3 horas',
    title: 'CONCEPTO DE REDES',
    excerpt: 'Curso sobre los conceptos fundamentales de redes, incluyendo protocolos, topologías y seguridad de red.',
  },
  {
    tag: 'Cisco',
    date: 'jul 2025',
    read: '3 horas',
    title: 'INTRODUCCIÓN A LA CIBERSEGURIDAD',
    excerpt: 'Curso sobre los conceptos fundamentales de ciberseguridad, incluyendo amenazas, vulnerabilidades y medidas de protección.',
  },
  {
    tag: 'Udemy',
    date: 'may 2025',
    read: '2.5 horas',
    title: 'INGENIERÍA DE PROMPTS PARA CHATGPT',
    excerpt:'Curso que adapta nuevos procedimiento al interactuar con la IA para dar mayor eficiencia a las respuesyas.',
  },
  {
    tag: 'Udemy',
    date: 'feb 2025',
    read: '3 horas',
    title: 'ETL DATA TESTING',
    excerpt: 'Curso sobre cómo extraer, transformar y cargar datos de manera eficiente.',
  },
  {
    tag: 'Platzi',
    date: 'dic 2024',
    read: '13 horas',
    title: 'FUNDAMENTO DE UX Y UI MANEJO DE FIGMA',
    excerpt: 'Curso que enseña los fundamentos de la experiencia de usuario (UX) y la interfaz de usuario (UI), incluyendo diseño centrado en el usuario y principios de usabilidad.',
  },


];

export const CONTACT_LINKS = [
  { href: 'https://github.com/Alexis-Campomanes', label: 'GitHub', mono: false },
  { href: 'https://www.linkedin.com/in/alexiscampomanes/', label: 'LinkedIn', mono: false },
  { href: '#contacto', label: 'alexiscp.developer@gmail.com', mono: true },
];

const C = TERM_COLORS;

export const INITIAL_LINES: TermLine[] = [
  { text: 'alexis@portfolio ~ % whoami', color: C.dim },
  { text: 'Alexis Campomanes — desarrollador fullstack', color: C.txt },
  { text: 'Front, back, base de datos y deploy. Todo el camino.', color: C.ok },
  { text: "Escribí 'ayuda' para ver qué puedo contarte.", color: C.dim },
];

export const COMMANDS: Record<string, TermLine[]> = {
  ayuda: [
    {
      text: 'Comandos: sobre-mi · stack · proyectos · servicios · contacto · cv · limpiar',
      color: C.ok,
    },
  ],
  'sobre-mi': [
    { text: 'Arranqué arreglando la web de un negocio familiar y me quedé.', color: C.txt },
    {
      text: 'Hoy construyo productos completos: pocas reuniones, mucho avance visible.',
      color: C.txt,
    },
  ],
  stack: [
    { text: 'front  → React, Next.js, TypeScript, React Native', color: C.txt },
    { text: 'back   → Node.js, NestJS, Python, GraphQL', color: C.txt },
    { text: 'datos  → PostgreSQL, MongoDB, Redis', color: C.txt },
    { text: 'infra  → AWS, Docker, CI/CD', color: C.txt },
  ],
  proyectos: PROJECTS.map((p) => ({
    text: `${p.num}  ${p.name}  [${p.metric} ${p.metricLabel}]`,
    color: C.txt,
  })),
  servicios: [
    { text: 'Sprint de producto   USD 1.200 / semana', color: C.txt },
    { text: 'Proyecto completo    desde USD 4.500', color: C.txt },
    { text: 'Soporte mensual      USD 900 / mes', color: C.txt },
    { text: 'Bajá a la sección Servicios para el detalle.', color: C.dim },
  ],
  contacto: [
    { text: 'mail    → alexiscp.developer@gmail.com', color: C.ok },
    { text: 'github  → github.com/Alexis-Campomanes', color: C.ok },
    { text: 'linkedin→ /in/alexiscampomanes', color: C.ok },
  ],
  cv: [{ text: 'CV en PDF disponible en la sección “¿Prefieres el CV en PDF?”.', color: C.brand }],
};
