import React from 'react'

const Home = ({user, setUser}) => {

    const handleClick = () => {
        setUser([])
    }

  return (
    <div>
        <h1>Home</h1>
        <h2>Bienvenido {user}</h2>
        <button onClick={handleClick}>
            Salir
        </button>
    </div>
  )
}

export default Home