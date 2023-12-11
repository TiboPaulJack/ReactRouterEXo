import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Products from "./page/Products";
import Cgv from "./page/Cgv";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cgv' element={<Cgv />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
