import React from 'react'

const Detalle = ({gender, status}) => {
    console.log(gender, status, 'props detalle');
    
  return (
    <div>
        <h3>Estado: {status}</h3>
        <h3>Genero: {gender}</h3>
    </div>
  )
}

export default Detalle