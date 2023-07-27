import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333; /* Color de fondo para la barra de navegación */
  padding: 10px 20px;
  color: #fff; /* Color del texto en la barra de navegación */

  .logo {
    font-size: 24px;
    font-family: 'Montserrat', sans-serif; /* Cambio de fuente a "Montserrat" */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Profundidad del logo */
  }

  .nav-links {
    font-size: 24px;
    font-family: 'Montserrat', sans-serif; /* Cambio de fuente a "Montserrat" */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Profundidad del logo */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Estilos para el botón "inicio" */
  .nav-links .btn-inicio {
    background-color: #fff; /* Color de fondo para el botón "inicio" */
    color: #333; /* Color del texto en el botón "inicio" */
    font-size: 18px;
    font-family: 'Montserrat', sans-serif; /* Cambio de fuente a "Montserrat" */
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 20px; /* Forma ovalada achatada */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Profundidad del botón "inicio" */
  }

  .nav-links .btn-inicio:hover {
    background-color: #f5f5f5; /* Color de fondo del botón "inicio" al pasar el ratón */
    color: #333; /* Color del texto en el botón "inicio" al pasar el ratón */
    text-decoration: none;
  }

  .clock {
    background-color: #fff; /* Color de fondo para el botón "inicio" */
    color: #333; /* Color del texto en el botón "inicio" */
    font-size: 18px;
    font-family: 'Montserrat', sans-serif; /* Cambio de fuente a "Montserrat" */
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 20px; /* Forma ovalada achatada */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Profundidad del botón "inicio" */
  }

`;
