import React, {Fragment, useEffect, useState} from 'react';
import Recta from './components/Recta';
import Formulario from './components/Formulario'


function App() {

    // Citas en local storage
  let resultadosIniciales = JSON.parse(localStorage.getItem('resultados'));
  if(!resultadosIniciales) {
    resultadosIniciales = [];
  }

  // Arreglo de citas
  const [resultados, guardarResultados] = useState(resultadosIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
      let resultadosIniciales = JSON.parse(localStorage.getItem('resultados'));

      if(resultadosIniciales) {
        localStorage.setItem('resultados', JSON.stringify(resultados))
      } else {
        localStorage.setItem('resultados', JSON.stringify([]));
      }
  }, [resultados] );

    //Funcion que tome resultados y agregue
    const crearCita = resultado => {
       guardarResultados([
           resultado
       ]);
    }
    //Funcion que elimina una cita por su ID
    const eliminarCita = () => {
        guardarResultados([]);

    }


    
    return ( 
    <Fragment>
        <h1> Calculadora de Razon de Cambio</h1>
        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <Formulario
                    crearCita={crearCita}
                    eliminarCita={eliminarCita}
                    />
                </div>
                <div className="one-half column">
                    <h2>Resultado</h2>
                    {resultados.map(resultado => (
                        <Recta
                        key={resultado.id}
                        resultado ={resultado}
                        eliminarCita={eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
    </Fragment>
    );
}

export default App;