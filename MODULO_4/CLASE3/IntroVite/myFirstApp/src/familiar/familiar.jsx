import React from 'react'

const Familiar = (props) => {
    console.log(props,'props familiar');
    
    const nombre = 'Juan';
  return (
    <div>
        Componente Familiar
        <h2>{nombre}</h2>

        ------
        Mi padre me envio unos
        <h2>{props.Regalo}</h2>
    </div>
  )
}

export default Familiar