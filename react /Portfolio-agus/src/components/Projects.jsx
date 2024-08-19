import React from "react";
import ProjectCard from "../components/ProjectCard"; // Asegúrate de la ruta correcta

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del proyecto 1.",
    image: "/path/to/image1.jpg", // Asegúrate de colocar la imagen en la carpeta correcta
    link: "https://enlace-a-tu-proyecto1.com",
  },
  {
    title: "Proyecto 2",
    description: "Descripción del proyecto 2.",
    image: "/path/to/image2.jpg",
    link: "https://enlace-a-tu-proyecto2.com",
  },
  // Agrega más proyectos aquí
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <ProjectCard project={project} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
