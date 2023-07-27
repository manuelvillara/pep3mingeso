import React, { useState, useEffect } from 'react';
import { StyledNuevoprograma, NavBarResultados } from './nuevoprograma.styled';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CodeMirror from '@uiw/react-codemirror';
import {vscodeDarkInit} from '@uiw/codemirror-theme-vscode';

import {javascript} from '@codemirror/lang-javascript';

const Nuevoprograma = () => {
   const [dificultad, setDificultad] = useState('');
   const [programa, setPrograma] = useState('');
   const [respuesta, setRespuesta]= useState('');

   const handleGuardarTodo = async () => {
      try {
         await axios.post(`http://localhost:8080/pregunta/nueva-pregunta`, {
            dificultad: dificultad,
            programa: programa,
            respuesta: respuesta
         });
         alert('Pregunta guardada exitosamente.');
         // Limpia los campos después de guardar la pregunta
         setDificultad('');
         setPrograma('');
         setRespuesta('');
      } catch (error) {
         alert('Error al guardar la pregunta.');
         console.error(error);
      }
   };

   const handleCodigoChange = (value) => {
      setPrograma(value);
   }


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
      <StyledNuevoprograma>
         <NavBarLocal />
         <h1>Agregar Pregunta</h1>
         <div className="">
            <label>Ingrese la dificultad del código:</label>
               <select value={dificultad} onChange={(e) => setDificultad(e.target.value)}>
                  <option value="">Seleccione una dificultad</option>
                  <option value="basico">Básico</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
               </select>

      
               <div className="code-box">
                  <h3>Ingrese el código del programa</h3>
                  {/* Utiliza la propiedad 'onChange' para actualizar la variable 'codigo' */}
                  <CodeMirror
                     value={programa}
                     onChange={handleCodigoChange}
                     language="python"
                     height="200px"
                     align="left"
                     theme={vscodeDarkInit({
                        settings: {
                           caret: '#c6c6c6',
                           fontFamily: 'monospace'
                        }
                     })}
                     extensions={[javascript({jsx:true})]}
                     options={{
                        lineWrapping:true,
                     }}
                  />
            </div>

            <label>Ingrese la respuesta del código, es decir, lo que se imprime por pantalla</label>
            <input
               type="text"
               value={respuesta}
               onChange={(e) => setRespuesta(e.target.value)}
            />
            <button type="button" onClick={handleGuardarTodo}>
               Guardar pregunta
            </button>
         
         </div>
      </StyledNuevoprograma>
   );
};

export default Nuevoprograma;
