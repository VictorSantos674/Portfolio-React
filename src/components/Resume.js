import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <h2>Currículo</h2>
        <p>Baixe meu currículo em formato PDF clicando no botão abaixo:</p>
        <a href="resume.pdf" download className="button">Download Currículo</a>
      </div>
    </section>
  );
}

export default Resume;