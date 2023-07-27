import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledPruebaFacil } from './pruebafacil.styled';
import Preguntas from '../preguntas/preguntas';


// Componente CodeBlock con el operador de encadenamiento opcional (?.)

const PruebaFacilComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dificultad = queryParams.get('dificultad');

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
   fetch(`http://localhost:8080/pregunta/${dificultad}`)
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, [dificultad]);

  return (
    <StyledPruebaFacil>
      <div className="text-center">
        <h1 className="asd">
          <b>
            <u>Prueba: Modo Básico</u>
          </b>
        </h1>
        {questions.map((question) => (
         <Preguntas
            programa={question.programa}
            respuesta={question.respuesta}
          />
        ))}
      </div>
    </StyledPruebaFacil>
  );
};

export default PruebaFacilComponent;
