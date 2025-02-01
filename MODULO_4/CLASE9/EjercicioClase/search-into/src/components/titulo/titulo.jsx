import React from 'react'
import './titulo.css'

const Titulo = ({nombre}) => {
  return (
    <div>
        <p className='title-Comptitulo'>
            Nombre: {nombre}
        </p>
    </div>
  )
}

export default Titulo