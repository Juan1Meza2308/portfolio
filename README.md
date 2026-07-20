# Portfolio — Juan Meza

Portfolio personal de producto full-stack. Single-page en **React + Vite + TypeScript**, sin dependencias pesadas, listo para desplegar en Vercel.

Proyectos destacados: **Green Hunt**, **DailyHumano**, **Ziely** y **Adria**.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build de producción

```bash
npm run build    # genera /dist (incluye typecheck con tsc)
npm run preview  # previsualiza el build
```

## Editar el contenido

Todo lo que se muestra sale de un solo archivo:

- [`src/data.ts`](src/data.ts) — tu nombre, rol, contacto y la lista de proyectos.
  - Cambia `profile.name` por tu nombre real a mostrar.
  - Agrega `linkedin` / `website` (déjalos en `""` para ocultarlos).
  - Cada proyecto acepta `live` (URL de demo) y `privateRepo` (bool).

El diseño (colores, tipografías, temas claro/oscuro) vive en [`src/styles.css`](src/styles.css).

## Desplegar en Vercel

1. Sube esta carpeta a un repo de GitHub.
2. En Vercel: **New Project → importa el repo**.
3. Vercel detecta Vite automáticamente:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy. Sin variables de entorno.

## Stack

React 18 · Vite 5 · TypeScript 5 · CSS con design tokens (tema claro/oscuro).
Tipografías: Bricolage Grotesque, Hanken Grotesk, JetBrains Mono (Google Fonts).
