import React, { useState } from "react";
import { StyledPreguntas } from './preguntas.styled';
import { CodeBlock, zenburn } from "react-code-blocks";
import Form from "react-bootstrap/Form";
import add_to_puntaje from "../puntaje/puntaje";


export default function PreguntasComponent({ programa, respuesta }) {

   console.log("programa:", programa);
   console.log("respuesta:", respuesta);

   const initialState = {
     answer: "",
   };
 
   const [puntaje, setPuntaje] = useState(
      localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
   );
 
   const [trueAnswer, setTrueAnswer] = useState(-1);
 
   const [input, setInput] = useState(initialState);
 
   const changeAnswerHandler = (event) => {
     setInput({ ...input, answer: event.target.value });
   };
 
   const compararRespuestas = (e) => {
      e.preventDefault();
      if (input.answer == respuesta) {
         setPuntaje(add_to_puntaje(7));
         setTrueAnswer(1);
      } else {
         setPuntaje(add_to_puntaje(1));
         setTrueAnswer(0);
      }
      if (localStorage.getItem("restantes") == 0) {
         window.location.href = "/Resultados";
      }
   };
 
   return (
   <div>
      <div className="preguntas-container">
         <StyledPreguntas>
            <div className="code-box">
               <CodeBlock
                  text={programa}
                  language="python"
                  theme={zenburn}
                  codeBlock={{ lineNumbers: true }}
                  align="left"
               />
            </div>
            <div className="respuesta">
               <Form>
                  <Form.Group
                     className="mb-3"
                     controlId="respuesta"
                     value={input.answer}
                     onChange={changeAnswerHandler}
                  >
                  <Form.Label>
                     <h3>¿Qué es lo que imprime por pantalla el código: </h3>
                  </Form.Label>
                     <Form.Control type="respuesta" placeholder="" />
                  </Form.Group>
            </Form>
               {trueAnswer == 1 ? (
                  <h3>
                     ¡Respuesta Correcta. Obtienes 7 puntos!
                  </h3>
               ) : trueAnswer == 0 ? (
                  <h3>
                     Respuesta Incorrecta. Obtienes 1 punto.
                  </h3>
               ) : (
                  <button varian="primary" onClick={compararRespuestas}>
                     Verificar Respuesta
                  </button>
               )}
            </div>
         <hr></hr>
         </StyledPreguntas>
      </div>
   </div>
   );

}
