import React, { useState } from 'react'
import './formulario.css'

const Formulario = ({setUser}) => {

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [errors, setErrors] = useState({
        nombreError: false,
        contrasenaError: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({
            nombreError: usuario === '',
            contrasenaError: contrasena === ''
        })

        if(usuario !== '' && contrasena !== ''){
            setUser([usuario])
        }
    }
    

  return (
    <div>
        <h1>Formulario</h1>
        <form className='formulario' onSubmit={handleSubmit}>
            <label>Usuario</label>
            <input type="text"  onChange={e => setUsuario(e.target.value)}/>
            {errors.nombreError && <p className='error'>El usuario es requerido</p>}
            <label>Contrasena</label>
            <input type="text" onChange={e => setContrasena(e.target.value)}/>
            {errors.contrasenaError && <p className='error'>La contrasena es requerido</p>}
            <button type='submit'>Ingresar</button>
           
        </form>
    </div>
  )
}

export default Formulario