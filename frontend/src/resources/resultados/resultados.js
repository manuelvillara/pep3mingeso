import React, { useState } from "react";
import { StyledResultados, NavBarResultados } from './resultados.styled';
import { Link } from 'react-router-dom';

export default function ResultadosComponent() {
 
   const [puntaje, setPuntaje] = useState(
     localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
   );
 
   const [segundos, setSegundos] = useState(
     localStorage.getItem("segundos") ? localStorage.getItem("segundos") : 0
   );
 
   const [minutos, setMinutos] = useState(
     localStorage.getItem("minutos") ? localStorage.getItem("minutos") : 0
   );
 
   const [horas, setHoras] = useState(
     localStorage.getItem("horas") ? localStorage.getItem("horas") : 0
   );

   const NavBarLocal = () => {
      return (
        <NavBarResultados>
          <div className="logo">
            Aprende Python!
          </div>
          <div className="nav-links">
            <Link to="/" className="btn-inicio">
              Volver al Inicio
            </Link>
          </div>
        </NavBarResultados>
      );
   };
 
   return (
   <StyledResultados>
      <NavBarLocal />
      <br></br>
      <div className="text-center">
         <div className="resultados">
            <h1>
               <b>
                  <u>Tu calificación es: {puntaje}/ 7</u>
               </b>
            </h1>
            <h1>Tu tiempo fue de:</h1>
               <h1>
                  <b>
                     {horas} horas, {minutos} minutos y {segundos} segundos.
                  </b>
               </h1>
               {puntaje == 7 ? (
                  <h1>¡Felicidades! Has completado el desafio con éxito.</h1>
               ) : (
                  <h1>¡Puedes mejorar! Sigue intentándolo.</h1>
               )}
         </div>
      </div>
   </StyledResultados>
     
   );
 }
