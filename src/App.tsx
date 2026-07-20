import { useEffect, useState } from "react";
import { profile, projects, type Project } from "./data";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme;
  onToggle: () => void;
}) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      type="button"
    >
      <span className="theme-toggle__dot" aria-hidden="true" />
      {theme === "dark" ? "Claro" : "Oscuro"}
    </button>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 12L12 4M12 4H5.5M12 4V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project">
      <div className="project__index" aria-hidden="true">
        {project.index}
      </div>

      <div className="project__body">
        <div className="project__meta-top">
          <span className="project__category">{project.category}</span>
          <span className="project__dot" aria-hidden="true">
            /
          </span>
          <span className="project__platform">{project.platform}</span>
          <span className="project__dot" aria-hidden="true">
            /
          </span>
          <span className="project__year">{project.year}</span>
        </div>

        <h3 className="project__name">{project.name}</h3>
        <p className="project__tagline">{project.tagline}</p>
        <p className="project__description">{project.description}</p>

        <ul className="stack" aria-label="Tecnologías">
          {project.stack.map((tech) => (
            <li key={tech} className="stack__chip">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="project__actions">
        {project.live ? (
          <a
            className="btn btn--primary"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Ver en vivo <ArrowUpRight />
          </a>
        ) : (
          <span className="btn btn--ghost btn--static">Demo privada</span>
        )}
        <span className="repo-note">
          {project.privateRepo ? "Repositorio privado" : "Código abierto"}
        </span>
      </div>
    </article>
  );
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  const year = new Date().getFullYear();

  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />

      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Inicio">
          <span className="monogram__mark" aria-hidden="true">
            ◉
          </span>
          <span className="monogram__text">{profile.name}</span>
        </a>
        <div className="topbar__right">
          <span className="status">
            <span className="status__pulse" aria-hidden="true" />
            Disponible para proyectos
          </span>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <main id="top">
        <section className="masthead">
          <p className="eyebrow">Portfolio — {year}</p>
          <h1 className="masthead__title">
            {profile.name}
            <span className="masthead__role">{profile.role}</span>
          </h1>
          <p className="masthead__statement">{profile.statement}</p>

          <div className="masthead__contacts">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="contact-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              github.com/{profile.githubHandle} <ArrowUpRight />
            </a>
            {profile.linkedin && (
              <a
                className="contact-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight />
              </a>
            )}
            <span className="contact-link contact-link--static">
              {profile.location}
            </span>
          </div>
        </section>

        <section className="works" aria-labelledby="works-title">
          <div className="works__header">
            <h2 id="works-title" className="works__title">
              Trabajos seleccionados
            </h2>
            <span className="works__count">
              {String(projects.length).padStart(2, "0")} productos
            </span>
          </div>

          <div className="works__list">
            {projects.map((project) => (
              <ProjectRow key={project.name} project={project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__cta">
          <p className="footer__lead">¿Construimos algo juntos?</p>
          <a className="footer__mail" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight />
          </a>
        </div>
        <div className="footer__row">
          <span>
            © {year} {profile.name}
          </span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="footer__built">
            Hecho con React · Vite — desplegado en Vercel
          </span>
        </div>
      </footer>
    </div>
  );
}
