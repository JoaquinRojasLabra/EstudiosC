import camilaFoto from "./assets/camila.jpg";
import diegoFoto from "./assets/diego.jpg";

export const PHONE = "+56 9 7865 0792";
export const PHONE_HREF = "tel:+56978650792";
export const EMAIL = "contacto@estudiosc.cl";

export const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Áreas de práctica", href: "#areas" },
  { label: "Cómo trabajamos", href: "#trabajamos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export const metrics = [
  { value: 24, suffix: " h", label: "Plazo de respuesta" },
  { value: 1, suffix: " a 1", label: "Trato directo" },
  { value: 6, suffix: "", label: "Áreas de práctica" },
];

export const pillars = [
  {
    n: "01",
    title: "Prevención y consulta diaria",
    text: "Acompañamiento jurídico permanente para la operación de su empresa, con criterio práctico y disponibilidad real.",
  },
  {
    n: "02",
    title: "Representación judicial",
    text: "Defensa y litigación ante los tribunales, con conducción procesal directa de los socios.",
  },
  {
    n: "03",
    title: "Contingencias y carteras",
    text: "Manejo integral de asuntos complejos en curso, con control de plazos, riesgos y reportes.",
  },
];

export const criteria = [
  {
    title: "Entender antes de asesorar",
    text: "Comprender el negocio antes de asesorar. La solución jurídica muchas veces no está en el artículo que corresponde, sino en la pregunta correcta.",
  },
  {
    title: "Plazos y costos, por escrito",
    text: "Alcance, hitos, criterios de decisión y estimación de costos se acuerdan antes de empezar. Sin sorpresas a mitad del asunto.",
  },
  {
    title: "Contacto directo y personal",
    text: "Comunicación directa con quien lleva su caso. Sin cadena de reenvíos ni respuestas de quien no conoce el asunto.",
  },
];

export const areas = [
  {
    n: "01",
    title: "Litigios, responsabilidad y seguros",
    text: "Tramitación civil y penal, responsabilidad, seguros y controversias derivadas de siniestros.",
  },
  {
    n: "02",
    title: "Civil, comercial y contratos",
    text: "Obligaciones, contratos, incumplimientos y negociación de soluciones.",
  },
  {
    n: "03",
    title: "Cobranza y recupero",
    text: "Cobro extrajudicial y judicial, juicios ejecutivos y gestión de carteras.",
  },
  {
    n: "04",
    title: "Laboral y relaciones colectivas",
    text: "Asesoría preventiva, conflictos individuales, negociación y defensa judicial.",
  },
  {
    n: "05",
    title: "Administrativo, regulatorio y consumidor",
    text: "Procedimientos ante organismos públicos, materias sancionatorias y consumo.",
  },
  {
    n: "06",
    title: "Aguas y materias especiales",
    text: "Derechos de aprovechamiento, procedimientos y asuntos regulados específicos.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Contacto directo",
    text: "Los socios conducen la estrategia y mantienen la comunicación con el cliente.",
  },
  {
    n: "02",
    title: "Respuesta oportuna",
    text: "Compromiso de respuesta dentro de 24 horas para las comunicaciones habituales.",
  },
  {
    n: "03",
    title: "Seguimiento periódico",
    text: "Reportes cada 15 o 30 días, según el asunto y las necesidades del cliente.",
  },
  {
    n: "04",
    title: "Estrategia definida",
    text: "Alcance, hitos, costos y criterios de decisión se acuerdan desde el inicio.",
  },
];

export const team = [
  {
    name: "Diego Sepúlveda Urzúa",
    role: "Socio",
    initials: "DS",
    photo: diegoFoto,
    bio: "Abogado de la Universidad Alberto Hurtado. Postítulo en Derecho Administrativo y Gestión Pública. Profesor asistente en la FEN de la Universidad de Chile. Experiencia en seguros, responsabilidad y daños, litigación civil, consumidor, recupero y gestión de carteras judiciales.",
    phone: "+56 9 7865 0792",
    phoneHref: "tel:+56978650792",
    email: "diego@estudiosc.cl",
  },
  {
    name: "Camila Castillo Oyarzún",
    role: "Socia",
    initials: "CC",
    photo: camilaFoto,
    bio: "Abogada con práctica en litigación y tramitación penal, derecho laboral y aguas, con especial dedicación a audiencias y tramitación oral. Su experiencia fortalece la conducción procesal y la representación directa de clientes en asuntos contenciosos.",
    phone: "+56 9 8240 2276",
    phoneHref: "tel:+56982402276",
    email: "camila@estudiosc.cl",
  },
];

export const reasons = [
  "Derecho laboral",
  "Derecho civil",
  "Derecho penal",
  "Familia y sucesión",
  "Consultoría corporativa",
  "Otro",
];

export const marqueeItems = [
  "Litigios y seguros",
  "Civil y comercial",
  "Cobranza y recupero",
  "Laboral",
  "Regulatorio y consumidor",
  "Aguas",
];
