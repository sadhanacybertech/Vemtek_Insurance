import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Header.jsx";

// Pages (create these files)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Services from "./pages/Services.jsx";

function App() {
  return (
    <Router>
      <BackToTop/>
      <CustomNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;