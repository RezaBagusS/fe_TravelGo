import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VirtualTour from "./pages/VirtualTour";
import Kontak from "./pages/Kontak";
import Tentang from "./pages/Tentang";
import Eksplorasi from "./pages/Eksplorasi";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/virtual-tour" element={<VirtualTour />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/user/eksplorasi" element={<Eksplorasi />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
