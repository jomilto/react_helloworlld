import React from 'react';

const HolaMundo = () => {
    const Saludo = 'Hola Mundo.';
    const isTrue = true;
    return(
        <div className="HolaMundo">
            <h1>{Saludo}</h1>
            <h2>Curso Básico de React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React image"/>

            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Es falso</h5>}

            {isTrue && <h4>Verdadero</h4>}

        </div>
    );
};

export default HolaMundo;