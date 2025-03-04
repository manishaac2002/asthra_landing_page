import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ProductServices from './components/ProductServices';
import Contact from './components/Contact';
import Career from './components/Career';

function App() {
  return (
    <Router>
      <NavBar />  {/* Keep NavBar outside Routes to make it persistent */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductServices />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;