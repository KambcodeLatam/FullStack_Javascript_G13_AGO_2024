
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [primerNombre, setPrimerNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [imagen, setImagen] = useState('');
  const [email, setEmail] = useState('')
  
  useEffect(() => {
    const url = 'https://randomuser.me/api/';

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results[0],'data <--');
      setPrimerNombre(data.results[0].name.first)
      setApellido(data.results[0].name.last)
      setImagen(data.results[0].picture.large)
      setEmail(data.results[0].email)
    })
  },[])

  return (
    <div>
      <h1>Personaje</h1>
      <div className='card'>
        <div>
          <img src={imagen} alt="imagen" />
        </div>
        <h2>{primerNombre} {apellido}</h2>
        <h2>{email}</h2>
      </div>
    </div>
  )
}

export default App
