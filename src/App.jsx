import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/Header.jsx";

// Pages (create these files)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Services from "./pages/Services.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import TermsConditions from "./pages/Policies/TermsCondition.jsx";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy.jsx";
import HippaNotice from "./pages/Policies/HIPPA-Policy.jsx";
import LegalNotice from "./pages/Policies/Legal-Notice.jsx";
import NonDiscrimination from "./pages/Policies/Non-Descrimination-Notice.jsx";

function App() {
  return (
    <Router>
      <BackToTop/>
      <CustomNavbar />
      <ScrollToTop/>

     <main>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termscondition" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/HIPPA-Notice" element={<HippaNotice />} />
        <Route path="/Legal-Notice" element={<LegalNotice />} />
        <Route path="/Non-Descrimination-notice" element={<NonDiscrimination />} />

      </Routes>
     </main>

      <Footer/>
    </Router>
  );
}

export default App;