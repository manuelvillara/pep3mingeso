import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #808080; /* Color de fondo para toda la página */

  font-family: 'Roboto', sans-serif; /* Fuente tipográfica "Roboto" */

  h4 {
    margin-bottom: 20px;
    font-size: 24px; /* Tamaño del título */
    color: #333; /* Color del texto para el título */
  }

  .card {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9; /* Color de fondo para las tarjetas */
    text-align: center;
    margin-bottom: 20px;
  }

  .card h5 {
    font-size: 20px; /* Tamaño del subtítulo de las tarjetas */
    color: #555; /* Color del texto para el subtítulo de las tarjetas */
  }

  .card p {
    font-size: 16px; /* Tamaño del contenido de las tarjetas */
    color: #777; /* Color del texto para el contenido de las tarjetas */
    margin-bottom: 10px;
  }

  .card a {
    color: #007bff; /* Color del texto para los enlaces */
    text-decoration: none;
    display: inline-block;
    margin-top: 10px;
  }

  .card a:hover {
    text-decoration: underline; /* Subrayado en el texto de los enlaces al pasar el ratón */
  }
}`;
