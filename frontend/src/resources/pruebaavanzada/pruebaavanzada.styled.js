import styled from 'styled-components';

export const StyledPruebaAvanzada = styled.div`
    .text-center {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #1b3039; /* Color oscuro para el texto */
        background-color: #808080; /* Fondo blanco */
    }
    .asd {
        padding-top: 10px;
        padding-bottom: 30px;
    }

    /* Ajustar los estilos del texto para que sea visible en el fondo blanco */
    h1, h2, h3, h4, h5, h6, p, span {
        color: #1b3039; /* Texto en color oscuro */
    }

    /* Ajustar los estilos de los enlaces para que se destaquen en el fondo blanco */
    a {
        color: #7dcea0; /* Enlaces en color verde */
        text-decoration: none;
    }

    /* Ajustar los estilos de los enlaces cuando se les da hover */
    a:hover {
        color: #ffbc0e; /* Enlaces en color amarillo al hacer hover */
    }
    `;
