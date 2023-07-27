import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { StyledPruebaAvanzada } from './pruebaavanzada.styled';
import Preguntas from '../preguntas/preguntas';


const PruebaAvanzadaComponent = () => {
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const dificultad = queryParams.get('dificultad');

   const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Realizar la conexión con la API de Spring Boot aquí
    fetch(`http://localhost:8080/pregunta/${dificultad}`)
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, [dificultad]); // Asegúrate de que la solicitud se realice cada vez que el parámetro cambie

  return (
    <StyledPruebaAvanzada>
      <div className="text-center">
        <h1 className="asd">
          <b>
            <u>Prueba: Modo Avanzado</u>
          </b>
        </h1>
        {questions.map((question) => (
         <Preguntas
            programa={question.programa}
            respuesta={question.respuesta}
          />
        ))}
      </div>
    </StyledPruebaAvanzada>
  );
};

export default PruebaAvanzadaComponent;
