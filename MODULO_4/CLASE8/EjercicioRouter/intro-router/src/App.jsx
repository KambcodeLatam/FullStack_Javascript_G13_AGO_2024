import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './navbar/navbar'
import Home from './components/Home/home'
import About from './components/About/about'
import NotFound from './components/Not-Found/notFound'

function App() {

  return (
    <div>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
