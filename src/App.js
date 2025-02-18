import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Development from './components/Development';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Victor Santos</h1>
          <p>Desenvolvedor Full Stack</p>
          <nav>
            <ul>
              <li><Link to="/">Sobre</Link></li>
              <li><Link to="/projects">Projetos</Link></li>
              <li><Link to="/development">Em Desenvolvimento</Link></li>
              <li><Link to="/contact">Contato</Link></li>
              <li><Link to="/resume">Currículo</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/development" component={Development} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>
        <footer>
          <p>&copy; 2025 Victor Santos. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;