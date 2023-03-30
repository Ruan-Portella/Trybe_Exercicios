import React from 'react';
import { Link } from 'react-router-dom';
import digimon from '../images/logodigimon.webp';
import '../styles/header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <img
            src={ digimon }
            alt="Grupo da primeira geração de Digimon"
            className="digimonImage"
          />
          <Link to="/">Search Digimon</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
