import styled from 'styled-components';

export const StyledResultados = styled.div`
  min-height: 100vh; /* Asegura que abarque toda la altura de la ventana del navegador */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #808080; /* Color de fondo para toda la página */
  font-family: 'Roboto', sans-serif; /* Fuente tipográfica "Roboto" */

  .resultados {
    /* Estilos para el contenedor de resultados */
    background-color: #FDFEFE; /* Color de fondo blanco */
    border-radius: 10px; /* Bordes redondeados */
    padding: 20px; /* Espaciado interno del contenedor de la pregunta */
    margin-bottom: 20px; /* Espaciado entre preguntas */
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #5A5A5A; /* Color de texto gris */
    width: 60%; /* Ancho del elemento */
    margin: auto; /* Centrar horizontalmente */
    border: 5px solid #5A5A5A; /* Borde gris */
    /* Ajusta otros estilos según tus preferencias */
  }
`;

export const NavBarResultados = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333; /* Color de fondo para la barra de navegación */
    padding: 10px 10px; /* Reducir el padding */
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
`;
