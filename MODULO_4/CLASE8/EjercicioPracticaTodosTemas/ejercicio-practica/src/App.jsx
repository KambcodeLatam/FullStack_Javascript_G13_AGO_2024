import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Characters from "./pages/characters/characters";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} /> 
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
