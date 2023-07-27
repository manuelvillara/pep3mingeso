import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const StyledPreguntas = styled.div`

    .preguntas-container {
        background-color: #5A5A5A; /* Color de fondo más oscuro */
        border-radius: 10px; /* Bordes redondeados */
        padding: 20px; /* Espaciado interno del contenedor de la pregunta */
        margin-bottom: 20px; /* Espaciado entre preguntas */
    }
    .code-box {
        background-color: #f8f8f8; /* Color de fondo del código Python */
        padding: 20px; /* Espaciado interno del código Python */
        border-radius: 10px; /* Bordes redondeados */
    
        pre {
            color: #f0f0f0; /* Color del texto del código Python */
        }
    
        .token {
            &.keyword, &.operator {
                color: #0077ff; /* Color de palabras clave y operadores */
            }
    
            &.comment {
                color: #f0f0f0; /* Color de comentarios */
            }
    
            &.function, &.property, &.variable {
                color: #f0f0f0; /* Color de funciones, propiedades y variables */
            }
        }
    }
    .text-enunciado {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .code-box {
        justify-content: center;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-bottom: 20px;
    }
    .respuesta {
        justify-content: center;
        padding-bottom: 50px;
    }

    button {
        font-weight: 700;
        color: #f0f0f0;
        padding: 9px 25px;
        background: #1d0e07;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
    }
    button:hover {
        background-color: #1d0e07;
        color: #ffbc0e;
        transform: scale(1.1);
    }
    .form-control {
        font-size: 18px; /* Tamaño de fuente personalizado */
        border-radius: 10px; /* Bordes redondeados */
        /* Otros estilos para Form.Control */
    }
    .custom-input {
        /* Tus estilos personalizados aquí */
        font-size: 20px;
        padding: 12px 20px;
        border: 2px solid #1d0e07;
        border-radius: 15px;
        /* Y otros estilos que desees agregar */
    }


`;

