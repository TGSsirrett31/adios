import React, { useState } from 'react';
import '../Css/Projects.css';

// Importa correctamente las imágenes desde assets
import img from '../assets/j.png';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const projects = [
    {
      id: 1,
      title: "Portafolio Creativo",
      description: "Un diseño de portafolio moderno y visualmente atractivo para presentar proyectos personales.",
      category: "Diseño",
      image: img,
      tags: ["Figma", "Diseño Web", "Creatividad"],
      bgColor: "cosmic-bg"
    },
    {
      id: 2,
      title: "Dashboard de Ventas",
      description: "Aplicación de escritorio con paneles interactivos para monitorear métricas comerciales.",
      category: "Programación",
      image: "neon",
      tags: ["React", "Node.js", "APIs"],
      bgColor: "neon-bg"
    },
    {
      id: 3,
      title: "Landing Page Promocional",
      description: "Página de aterrizaje animada para campañas de marketing digital.",
      category: "UI/UX",
      image: "retro",
      tags: ["Figma", "UX Research", "Prototipo"],
      bgColor: "retro-bg"
    },
    {
      id: 4,
      title: "Sistema de Reservas",
      description: "Sistema web para la gestión de reservas en hoteles y restaurantes.",
      category: "Programación",
      image: "astro",
      tags: ["JavaScript", "Firebase", "Responsive"],
      bgColor: "astro-bg"
    },
    {
      id: 5,
      title: "Rediseño de Marca",
      description: "Proyecto de identidad visual completo para una marca emergente.",
      category: "Diseño",
      image: "pixel",
      tags: ["Ilustrator", "Branding", "Identidad Visual"],
      bgColor: "pixel-bg"
    },
    {
      id: 6,
      title: "App de Tareas UX",
      description: "Diseño de experiencia de usuario para una app de productividad diaria.",
      category: "UI/UX",
      image: "sprites",
      tags: ["UX Writing", "Mobile Design", "Wireframes"],
      bgColor: "sprites-bg"
    }
  ];

  const categories = ['Todos', 'Diseño', 'Programación', 'UI/UX'];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  return (
  <>
  <section id='Projects'>
    <div className="projects-container">
      <div className="projects-wrapper">
        <div className="header-section">
          <h1 className="main-title">
            <span className="title-highlight">Mis Proyectos</span>
          </h1>
          <div className="title-underline"></div>
          <p className="subtitle">
            Explora mi portafolio de diseño, programación y experiencia de usuario donde demuestro mis habilidades y creatividad.
          </p>
        </div>

        <div className="filter-section">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="category-badge">
                <span>{project.category}</span>
              </div>

              <div className={`project-image ${project.bgColor}`} style={{ backgroundImage: `url(${project.image})` }}>
                <div className="image-overlay"></div>
                <div className="image-content">
                  {project.category === 'Programación' && (
                    <div className="code-icon">{"</>"}</div>
                  )}
                  {project.category === 'Diseño' && (
                    <div className="design-patterns">
                      <div className="design-box"></div>
                      <div className="design-circle"></div>
                    </div>
                  )}
                  {project.category === 'UI/UX' && (
                    <div className="ui-lines">
                      <div className="ui-line long"></div>
                      <div className="ui-line medium"></div>
                      <div className="ui-line short"></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="view-project-btn">
                  <span>Ver Proyecto</span>
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-section">
          <button className="view-all-btn">
            <span>Ver Todos los Proyectos</span>
            <svg className="view-all-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </section>
    </>  
  );
};

export default ProjectsSection;
