// src/FeelForm.jsx
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './FeelForm.css';

function FeelForm() {
  // Estado para almacenar el texto del usuario
  const [feel, setFeel] = useState("");
  const [respuesta, setRespuesta] = useState(false);


  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes manejar el dato, por ejemplo, enviarlo a un backend
    const data = await fetch('http://localhost:3000/question/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: feel })

      })
      const response = await data.json()
      setRespuesta(response);


    alert("Gracias por compartir, nos alegra saber que te sientes: " + feel);
    setFeel("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feel">¿Cómo te sientes hoy?</label>
        <textarea 
          id="feel" 
          value={feel} 
          onChange={(e) => setFeel(e.target.value)} 
          placeholder="Cuéntanos cómo te sientes..." 
        />
        <button type="submit">Enviar</button>
      </form>
      {respuesta && <ReactMarkdown>{respuesta.response}</ReactMarkdown>}
    </>
  );
}

export default FeelForm;
