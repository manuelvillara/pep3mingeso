import React from 'react';
import PropTypes from 'prop-types';
import { HomeWrapper } from './home.styled';
//import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography, Grid } from '@mui/material';
import { StyledHome } from './home.styled'; // Importa el componente StyledHome


const Home = () => {

   const comenzar = () => {
      localStorage.setItem("puntaje", 0);
      localStorage.setItem("restantes", 4);
    };
  
    const handleComenzar = () => {
      comenzar();
    };

   return (
      <StyledHome>
         <h4>Bienvenido al Aprendizaje de Python</h4>
      <div className="card">
        <h5>Nivel Básico</h5>
        <p>¡Pon a prueba tus conocimientos básicos de Python con esta prueba!</p>
        <Link to={{ pathname: '/Basico', search: '?dificultad=Basico' }} onClick={handleComenzar} >Realizar prueba</Link>
      </div>
      <div className="card">
        <h5>Nivel Intermedio</h5>
        <p>¡Demuestra tus habilidades en Python con esta prueba de nivel intermedio!</p>
        <Link to={{ pathname: '/Intermedio', search: '?dificultad=Intermedio' }} onClick={handleComenzar} >Realizar prueba</Link>
      </div>
      <div className="card">
        <h5>Nivel Avanzado</h5>
        <p>¡Pon a prueba tus conocimientos avanzados de Python con esta prueba desafiante!</p>
        <Link to={{ pathname: '/Avanzado', search: '?dificultad=Avanzado' }} onClick={handleComenzar} >Realizar prueba</Link>
      </div>
      <div className="card">
        <h5>Agregar una Pregunta</h5>
        <p>¿Tienes una pregunta nueva para agregar a la batería? ¡Hazlo aquí!</p>
        <Link to="/NuevoPrograma">Agregar pregunta</Link>
      </div>
     </StyledHome>
   );
 }; 
<script></script>
Home.propTypes = {};

Home.defaultProps = {};

export default Home;
