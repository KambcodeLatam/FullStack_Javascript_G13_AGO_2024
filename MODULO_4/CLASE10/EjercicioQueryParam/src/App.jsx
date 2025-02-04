import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Characters from "./pages/characters/characters";
import SearchParam from "./pages/searchParam/searchParam";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character' element={<Characters />} />
          <Route path='/search' element={<SearchParam />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
