// ─────────────────────────────────────────────────────────────
//  Edita estos datos a tu gusto. Todo lo que se muestra en el
//  portfolio sale de aquí — cada texto tiene versión ES e EN.
// ─────────────────────────────────────────────────────────────

export type Lang = "es" | "en";
export type Localized = Record<Lang, string>;

export const profile = {
  name: "Juan Meza", // ← cámbialo por tu nombre a mostrar
  location: "Colombia",
  email: "juan1meza2308@gmail.com",
  github: "https://github.com/juan1meza2308",
  githubHandle: "juan1meza2308",
  // Opcionales — deja en "" para ocultarlos.
  linkedin: "",
  website: "",
  role: {
    es: "Desarrollo de producto full-stack",
    en: "Full-stack product engineering",
  },
  statement: {
    es: "Construyo productos digitales de punta a punta — del mapa a la base de datos y a la tienda de apps. Cuatro productos reales en producción, del cuidado ambiental a la logística de mercancías peligrosas.",
    en: "I build digital products end to end — from the map to the database to the app store. Four real products in production, from environmental care to hazardous-goods logistics.",
  },
};

export type Project = {
  index: string;
  name: string;
  category: Localized;
  tagline: Localized;
  description: Localized;
  stack: string[];
  year: string;
  platform: Localized;
  live?: string; // URL de demo en vivo (opcional)
  privateRepo?: boolean; // repo privado → nota "repositorio privado"
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Green Hunt",
    category: { es: "Sostenibilidad", en: "Sustainability" },
    tagline: {
      es: "El cuidado ambiental convertido en juego.",
      en: "Environmental action, turned into a game.",
    },
    description: {
      es: "Aplicación de mapa geolocalizado que convierte la acción ambiental en un juego: los jugadores detectan, fotografían y rescatan objetos del mundo real, completan misiones y colaboran sobre un mapa compartido entre ciudades. Incluye análisis de imágenes con IA y clustering de hallazgos.",
      en: "A location-based web app that turns environmental action into a game: players spot, photograph and rescue real-world items, complete missions and collaborate on a shared map across cities. Includes AI image analysis and clustering of finds.",
    },
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Leaflet",
      "Firebase",
      "Supabase",
      "Google Gen AI",
    ],
    year: "2026",
    platform: { es: "Web", en: "Web" },
    live: "https://green-hunt-web-v1.vercel.app",
    privateRepo: true,
  },
  {
    index: "02",
    name: "DailyHumano",
    category: { es: "Productividad · IA", en: "Productivity · AI" },
    tagline: {
      es: "Daily standups asíncronos, sin reuniones.",
      en: "Async daily standups, no meetings.",
    },
    description: {
      es: "Plataforma que reemplaza las reuniones diarias por check-ins conversacionales con IA: detecta bloqueos y riesgos técnicos, mide el bienestar del equipo con análisis de sentimiento (mood score) y genera reportes accionables para líderes. Tablero kanban, alertas inteligentes y check-in por voz.",
      en: "A platform that replaces daily meetings with AI-powered conversational check-ins: it detects blockers and technical risks, measures team wellbeing through sentiment analysis (mood score) and generates actionable reports for leads. Kanban board, smart alerts and voice check-in.",
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Supabase",
      "Google Gemini",
      "Whisper",
      "Zustand",
    ],
    year: "2026",
    platform: { es: "Web", en: "Web" },
    live: "https://dailyhumano.vercel.app",
    privateRepo: true,
  },
  {
    index: "03",
    name: "Ziely",
    category: { es: "SaaS · IA", en: "SaaS · AI" },
    tagline: {
      es: "Levantamiento de requerimientos guiado por IA.",
      en: "AI-guided software requirements.",
    },
    description: {
      es: "Plataforma inteligente para levantar y estructurar requerimientos de software mediante un wizard conversacional con IA, con un design system premium y una experiencia sofisticada de principio a fin. Integraciones con Slack y email.",
      en: "An intelligent platform to capture and structure software requirements through an AI conversational wizard, with a premium design system and a sophisticated end-to-end experience. Slack and email integrations.",
    },
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    year: "2025 – 2026",
    platform: { es: "Web", en: "Web" },
    live: "https://ziely.app",
    privateRepo: true,
  },
  {
    index: "04",
    name: "Adria",
    category: { es: "Logística · Móvil", en: "Logistics · Mobile" },
    tagline: {
      es: "Transporte de mercancías peligrosas, en el bolsillo.",
      en: "Hazardous-goods transport, in your pocket.",
    },
    description: {
      es: "App móvil para conductores de transporte ADR: digitaliza cartas de porte (incluso multipágina), genera señalización y etiquetas de peligro con fotos, y gestiona planes de suscripción del Copiloto ADRIA. Backend en Firebase, publicada en la tienda de aplicaciones.",
      en: "A mobile app for ADR hazardous-goods drivers: it digitizes consignment notes (even multi-page), generates hazard signage and labels from photos, and manages ADRIA Copilot subscription plans. Firebase backend, published on the app store.",
    },
    stack: ["React Native", "Expo", "TypeScript", "Firebase"],
    year: "2026",
    platform: { es: "Android · Web", en: "Android · Web" },
    live: "https://adriaapp.com",
    privateRepo: true,
  },
];

// ── Textos de interfaz ────────────────────────────────────────
export const ui: Record<Lang, Record<string, string>> = {
  es: {
    available: "Disponible para proyectos",
    home: "Inicio",
    portfolio: "Portfolio",
    worksTitle: "Trabajos seleccionados",
    products: "productos",
    technologies: "Tecnologías",
    viewLive: "Ver en vivo",
    repoPrivate: "Repositorio privado",
    repoOpen: "Código abierto",
    footerLead: "¿Construimos algo juntos?",
    footerBuilt: "Hecho con React · Vite — desplegado en Vercel",
    themeToLight: "Cambiar a tema claro",
    themeToDark: "Cambiar a tema oscuro",
    langLabel: "Cambiar idioma",
  },
  en: {
    available: "Available for work",
    home: "Home",
    portfolio: "Portfolio",
    worksTitle: "Selected work",
    products: "products",
    technologies: "Technologies",
    viewLive: "View live",
    repoPrivate: "Private repository",
    repoOpen: "Open source",
    footerLead: "Let's build something together.",
    footerBuilt: "Built with React · Vite — deployed on Vercel",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    langLabel: "Change language",
  },
};
