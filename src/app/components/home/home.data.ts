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
    kind: 'SaaS · Producto propio',
    name: 'Panel de distribuidoras',
    desc: 'Un CRM liviano para equipos de venta en ruta: pedidos offline, cobranzas y stock en un solo lugar. Diseñé el modelo de datos y lo llevé a producción solo.',
    metric: '-40%',
    metricLabel: 'tiempo de cierre de pedido',
    tags: ['Next.js', 'Node', 'PostgreSQL', 'AWS'],
    art: 'linear-gradient(135deg,#2A1848 0%,#542F87 100%)',
  },
  {
    num: '02',
    kind: 'E-commerce · Cliente',
    name: 'Tienda con pagos locales',
    desc: 'Migré una tienda lenta a un stack headless con checkout propio e integración de pasarelas regionales. Todo medido con Lighthouse antes y después.',
    metric: '2.1s → 0.6s',
    metricLabel: 'carga percibida (LCP)',
    tags: ['React', 'TypeScript', 'Stripe', 'Redis'],
    art: 'linear-gradient(135deg,#007F78 0%,#00B8AD 100%)',
  },
  {
    num: '03',
    kind: 'Interno · Automatización',
    name: 'Motor de reportes',
    desc: 'Reemplacé un proceso de planillas manuales por un servicio que consolida datos de tres sistemas y envía el reporte cada mañana.',
    metric: '12h/sem',
    metricLabel: 'de trabajo manual eliminado',
    tags: ['Python', 'Docker', 'PostgreSQL', 'GraphQL'],
    art: 'linear-gradient(135deg,#3D2166 0%,#00B8AD 100%)',
  },
  {
    num: '04',
    kind: 'Mobile · Cliente',
    name: 'App de turnos',
    desc: 'App para agendar y recordar turnos con notificaciones push y panel web para el negocio. Una base de código para iOS, Android y web.',
    metric: '+28%',
    metricLabel: 'asistencia a los turnos',
    tags: ['React Native', 'Node', 'MongoDB'],
    art: 'linear-gradient(135deg,#542F87 0%,#8A5BC5 100%)',
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

export const FILTERS = ['Todos', 'React', 'Node', 'PostgreSQL', 'Python', 'React Native'];

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
      'Backend, base de datos y hosting',
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
    role: 'Desarrollador fullstack independiente',
    org: 'Clientes propios · Remoto',
    what: 'Productos de punta a punta para pymes y startups: relevamiento, desarrollo, deploy y acompañamiento.',
    dot: '#00B8AD',
  },
  {
    when: '2022 — 2024',
    role: 'Fullstack semi-senior',
    org: 'Empresa de software (placeholder)',
    what: 'Features de un producto SaaS con miles de usuarios; me tocó ordenar el backend y bajar los tiempos de respuesta.',
    dot: '#542F87',
  },
  {
    when: '2021 — 2022',
    role: 'Desarrollador frontend',
    org: 'Agencia digital (placeholder)',
    what: 'Interfaces para clientes de retail y servicios, con foco en performance y accesibilidad.',
    dot: '#8A5BC5',
  },
  {
    when: '2020',
    role: 'Los primeros proyectos',
    org: 'Aprendiendo en la práctica',
    what: 'Sitios y automatizaciones para negocios del barrio. Ahí entendí que el código sirve cuando resuelve algo concreto.',
    dot: '#CFC9D6',
  },
];

export const FACTS = [
  { label: 'Base', value: 'Remoto · LATAM' },
  { label: 'Idiomas', value: 'Español · Inglés técnico' },
  { label: 'Respondo en', value: '< 24 horas' },
];

export const NOTES = [
  {
    tag: 'Arquitectura',
    date: 'sep 2026',
    read: '6 min',
    title: 'Cuándo NO necesitás microservicios',
    excerpt:
      'Un monolito bien ordenado aguanta mucho más de lo que dicen. Cómo decidirlo sin fe ciega.',
  },
  {
    tag: 'Performance',
    date: 'ago 2026',
    read: '4 min',
    title: 'De 2.1s a 0.6s de LCP sin cambiar de framework',
    excerpt: 'Las cuatro cosas que movieron la aguja de verdad en una tienda real.',
  },
  {
    tag: 'Freelance',
    date: 'jul 2026',
    read: '5 min',
    title: 'Cómo presupuesto un proyecto sin quedar corto',
    excerpt: 'Mi checklist para estimar alcance, riesgos y el famoso “ya que estamos”.',
  },
];

export const CONTACT_LINKS = [
  { href: 'https://github.com/', label: 'GitHub', mono: false },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', mono: false },
  { href: 'mailto:hola@alexiscampomanes.dev', label: 'hola@alexiscampomanes.dev', mono: true },
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
    { text: 'mail    → hola@alexiscampomanes.dev', color: C.ok },
    { text: 'github  → github.com/alexiscampomanes', color: C.ok },
    { text: 'linkedin→ /in/alexiscampomanes', color: C.ok },
  ],
  cv: [{ text: 'CV en PDF disponible en la sección “¿Preferís el CV en PDF?”.', color: C.brand }],
};
