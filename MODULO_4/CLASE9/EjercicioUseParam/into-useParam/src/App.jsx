import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './navbar/navbar'
import Home from './pages/home/home'
import About from './pages/about/about'
import User from './pages/user/user'

function App() {


  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='/user/:id' element={<User />} /> 
        </Routes>
      </BrowserRouter>
  )
}

export default App
