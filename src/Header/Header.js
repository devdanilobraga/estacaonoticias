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
            <Link to="/">
              <section className="portfolio-experiment">
                <div>
                  <span className="text">Criar Conteúdo</span>
                  <span className="line -right"></span>
                  <span className="line -top"></span>
                  <span className="line -left"></span>
                  <span className="line -bottom"></span>
                </div>
              </section>
            </Link>
          </li>
          <li>
            <Link to="/show">
              <section className="portfolio-experiment">
                <div>
                  <span className="text">Mostra Conteúdo</span>
                  <span className="line -right"></span>
                  <span className="line -top"></span>
                  <span className="line -left"></span>
                  <span className="line -bottom"></span>
                </div>
              </section>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
