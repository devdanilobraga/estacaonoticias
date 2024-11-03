import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; 
import logo from '../Assets/Logo.png'; 

const Header = () => {
 
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo da Estação de Notícias" />
      </div>
      <nav className="main-nav">
        <ul>
          <li>
              <section className="portfolio-experiment">
                <a href="/">
                  <span className="text">Criar Conteúdo</span>
                  <span className="line -right"></span>
                  <span className="line -top"></span>
                  <span className="line -left"></span>
                  <span className="line -bottom"></span>
                </a>
              </section>
          </li>
          <li>
              <section className="portfolio-experiment">
                <a  href="/show">
                  <span className="text">Mostra Conteúdo</span>
                  <span className="line -right"></span>
                  <span className="line -top"></span>
                  <span className="line -left"></span>
                  <span className="line -bottom"></span>
                </a>
              </section>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
