import React from 'react';

function Development() {
  return (
    <section id="development">
      <div className="container">
        <h2>Projetos em Desenvolvimento</h2>
        <div className="project">
          <h3>Projeto em Desenvolvimento 1</h3>
          <img src="images/underdevelopment1.jpg" alt="Projeto em Desenvolvimento 1" />
          <p>Descrição do projeto em desenvolvimento 1...</p>
        </div>
        <div className="project">
          <h3>Projeto em Desenvolvimento 2</h3>
          <img src="images/underdevelopment2.jpg" alt="Projeto em Desenvolvimento 2" />
          <p>Descrição do projeto em desenvolvimento 2...</p>
        </div>
        {/* Adicionar mais projetos aqui */}
      </div>
    </section>
  );
}

export default Development;