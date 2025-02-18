import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projetos Realizados</h2>
        <div className="project">
          <h3>Projeto Realizado 1</h3>
          <img src="images/project1.jpg" alt="Projeto Realizado 1" />
          <p>Descrição do projeto realizado 1...</p>
        </div>
        <div className="project">
          <h3>Projeto Realizado 2</h3>
          <img src="images/project2.jpg" alt="Projeto Realizado 2" />
          <p>Descrição do projeto realizado 2...</p>
        </div>
        {/* Adicionar mais projetos aqui */}
      </div>
    </section>
  );
}

export default Projects;