import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VirtualTour from "./pages/VirtualTour";
import Kontak from "./pages/Kontak";
import Tentang from "./pages/Tentang";
import Eksplorasi from "./pages/Eksplorasi";
import DinamicVirtualTour from "./pages/DinamicVirtualTour";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/AdminPanel";
import ListWisata from "./component/AdminComp/ListWisata";
import AddWisata from "./component/AdminComp/AddWisata";
import UpdateWisata from "./component/AdminComp/UpdateWisata";
import AdminProfile from "./component/AdminComp/AdminProfile";

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route
              path="/virtual-tour/:wisataTitle"
              element={<DinamicVirtualTour />}
            />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/user/eksplorasi" element={<Eksplorasi />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/admin/*" element={<AdminPanel />}>
              <Route path="kelola-wisata" element={<ListWisata />} />
              <Route path="add-wisata" element={<AddWisata />} />
              <Route path="update-wisata" element={<UpdateWisata />} />
              <Route path="profile" element={<AdminProfile />} />
            </Route>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;
