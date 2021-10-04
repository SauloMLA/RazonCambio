import React, {Fragment, useState} from 'react'
import { v4 as uuidv4, v4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita, eliminarCita}) => {
    //Crear State de Citas
    const [resultado, actualizarResultado] = useState({
        funcionM: '',
        puntoX1: '',
        puntoX2: '',
        puntoX3: ''
    });
    const [error, actualizarError] = useState('')
    //Funcion que se ejecuta cada vez que el usuario escribe
    const actualizarState = e => {
        actualizarResultado({
            ...resultado,
            [e.target.name] : e.target.value
        })
    }
    //Extraer los valores

    const { funcionM, puntoX1, puntoX2, puntoX3} = resultado;

    const clean = () => {
        actualizarResultado({
            funcionM: '',
            puntoX1: '',
            puntoX2: '',
            puntoX3: ''
        })
        eliminarCita();
    }
    //Cuando se envia el form
    const submitCita = e =>{
        e.preventDefault();
        eliminarCita();
        //Validar
        if (funcionM.trim() === '' || ((puntoX1.trim() === '' || puntoX2.trim() === '') && puntoX3.trim() === '')) {
            
            console.log('Hay un error')
            actualizarError('Faltan Datos');
            return;
        }
    
        //Eliminar el mensaje previo
        actualizarError('');
        
        //Asignar un ID
        resultado.id = v4();

        //Crear la Cita
        
        crearCita(resultado);

        
        
    }
    return (  
        <Fragment>
            <h2>Datos</h2>
            {error !== '' ? <p className="alerta-error">{error}</p> : null}
            <form onSubmit={submitCita}>
                <label htmlFor="" className="s1rem">Calcular</label>
                <label>Funcion (Usa como literal 'x') </label>
                <div className="row">
                    <input 
                    type="text"
                    name="funcionM"
                    className="column"
                    placeholder="Ejemplo: 2x^2 + 3"
                    onChange={actualizarState}
                    value={funcionM}
                    />
    
                </div> 
                <label htmlFor="" className="s1rem">Puntos para comparar
                </label>
                <label>Comparativa 1 R.C.P</label>
                <div className="row">
                    <input 
                    type="text"
                    name="puntoX1"
                    className="one-half column"
                    placeholder="X1="
                    onChange={actualizarState}
                    value={puntoX1}
                    />
                    <input 
                    type="text"
                    name="puntoX2"
                    className="one-half column"
                    placeholder="X2="
                    onChange={actualizarState}
                    value={puntoX2}
                    />
                 </div>
                 <label>R.C.I (Opcional)</label>
                <div className="row">
                    <input 
                    type="text"
                    name="puntoX3"
                    className="column"
                    placeholder="X3="
                    onChange={actualizarState}
                    value={puntoX3}
                    />
                   
                 </div>
                <button type="submit" className="u-full-width button-primary">Calcular</button>
            </form>
            <button onClick={() => clean()} className="u-full-width borrar-button">Limpiar</button>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
export default Formulario;