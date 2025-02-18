import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicionar uma lógica para enviar o formulário via AJAX ou exibir uma mensagem de confirmação
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contato</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;