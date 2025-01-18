import React from 'react'
import Familiar from '../familiar/familiar';

const Servientrega = (props) => {
    console.log(props,'props');
    
  return (
    <div>
        Componente Servientrega
        el paquete que se recibe es
        <h2>{props.encomienda}</h2>

    ---------------------------

    <Familiar Regalo={props.encomienda}/>
    </div>
  )
}

export default Servientrega