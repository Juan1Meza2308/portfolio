// ─────────────────────────────────────────────────────────────
//  Edita estos datos a tu gusto. Todo lo que se muestra en el
//  portfolio sale de aquí.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Juan Meza", // ← cámbialo por tu nombre a mostrar
  role: "Desarrollo de producto full-stack",
  location: "Colombia",
  // Frase de presentación (1–2 líneas).
  statement:
    "Construyo productos digitales de punta a punta — del mapa a la base de datos y a la tienda de apps. Cuatro productos reales en producción, del cuidado ambiental a la logística de mercancías peligrosas.",
  email: "juan1meza2308@gmail.com",
  github: "https://github.com/juan1meza2308",
  githubHandle: "juan1meza2308",
  // Opcionales — deja en "" para ocultarlos.
  linkedin: "",
  website: "",
};

export type Project = {
  index: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  stack: string[];
  year: string;
  platform: string;
  live?: string; // URL de demo en vivo (opcional)
  privateRepo?: boolean; // repo privado → no se enlaza el código
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Green Hunt",
    category: "Sostenibilidad",
    tagline: "El cuidado ambiental convertido en juego.",
    description:
      "Aplicación de mapa geolocalizado que convierte la acción ambiental en un juego: los jugadores detectan, fotografían y rescatan objetos del mundo real, completan misiones y colaboran sobre un mapa compartido entre ciudades. Incluye análisis de imágenes con IA y clustering de hallazgos.",
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
    platform: "Web",
    live: "https://green-hunt-web-v1.vercel.app",
    privateRepo: true,
  },
  {
    index: "02",
    name: "DailyHumano",
    category: "Productividad · IA",
    tagline: "Daily standups asíncronos, sin reuniones.",
    description:
      "Plataforma que reemplaza las reuniones diarias por check-ins conversacionales con IA: detecta bloqueos y riesgos técnicos, mide el bienestar del equipo con análisis de sentimiento (mood score) y genera reportes accionables para líderes. Tablero kanban, alertas inteligentes y check-in por voz.",
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
    platform: "Web",
    live: "https://dailyhumano.vercel.app",
    privateRepo: true,
  },
  {
    index: "03",
    name: "Ziely",
    category: "SaaS · IA",
    tagline: "Levantamiento de requerimientos guiado por IA.",
    description:
      "Plataforma inteligente para levantar y estructurar requerimientos de software mediante un wizard conversacional con IA, con un design system premium y una experiencia sofisticada de principio a fin. Integraciones con Slack y email.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    year: "2025 – 2026",
    platform: "Web",
    live: "https://ziely.app",
    privateRepo: true,
  },
  {
    index: "04",
    name: "Adria",
    category: "Logística · Móvil",
    tagline: "Transporte de mercancías peligrosas, en el bolsillo.",
    description:
      "App móvil para conductores de transporte ADR: digitaliza cartas de porte (incluso multipágina), genera señalización y etiquetas de peligro con fotos, y gestiona planes de suscripción del Copiloto ADRIA. Backend en Firebase, publicada en la tienda de aplicaciones.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase"],
    year: "2026",
    platform: "Android · Web",
    live: "https://adriaapp.com",
    privateRepo: true,
  },
];
