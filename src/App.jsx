import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Views/Home/Home';
import AboutUs from './Views/AboutUs/AboutUs';
import Product from './Views/Product/Product';
import Career from './Views/Career/Career';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <NavBar />  
      <div className="scroll-smooth"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;