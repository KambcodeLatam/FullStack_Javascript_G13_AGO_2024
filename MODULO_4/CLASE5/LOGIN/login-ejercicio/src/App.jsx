import { useState } from 'react';
import './App.css'
import Formulario from './formulario/formulario'
import Home from './home/home';

function App() {

  const [user, setUser] = useState('');


  return (
    <div>
      {
        !user.length > 0
        ?<Formulario setUser={setUser}/>
        :<Home user={user} setUser={setUser}/>
      }
    </div>
  )
}

export default App
