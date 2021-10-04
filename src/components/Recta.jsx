import React from 'react'
import PropTypes from 'prop-types';

import { rciFunction, rcpFunction } from './Calculator';

    
const Resultado = ({resultado}) => {
   const {funcionM, puntoX1, puntoX2, puntoX3} = resultado;

   if(puntoX1 !== '' && puntoX2 !== ''){
    var finalAnswer = rcpFunction(funcionM, puntoX1, puntoX2);
   
    }else{
        finalAnswer = '';
    }
   

   if(puntoX3 !== ''){
       var finalRciAnswer = rciFunction(funcionM, puntoX3);
   }else{
       finalRciAnswer = '';
   }
       
   
    return(
        <>
        {finalAnswer === 'Expresion Invalida' ?  <p className="alerta-error">Expresion Invalida</p> 
        : 
            <div className="cita">
                <p>Respuestas:</p>
                {
                    finalAnswer !== '' ? <p> R.C.P = {finalAnswer}</p>: null
                }
                {
                    finalRciAnswer !== '' ?  <p> R.C.I = {finalRciAnswer}</p> : null
                }
            </div>
        }
        </>
    )
}

Resultado.propTypes = {
    resultado: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Resultado;