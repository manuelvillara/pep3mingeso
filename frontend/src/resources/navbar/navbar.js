import React from 'react';
import Cronometro from '../cronometro/cronometro';
import { Link } from 'react-router-dom';
import { StyledNavBar } from './navbar.styled'; // Importa el componente StyledNavBar

const NavBar = () => {
  return (
    <StyledNavBar>
      <div className="logo">
        Aprende Python!
      </div>
      <div className="clock">
        <Cronometro />
      </div>
      <div className="nav-links">
        <Link to="/" className="btn-inicio">
          Volver al Inicio
        </Link>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;

