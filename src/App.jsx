import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTES
import HeaderTop from "./components/layout/HeaderTop";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/ScrollToTop"; // 👈 IMPORTANTE

// PÁGINAS PRINCIPALES
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";

// PRODUCTOS
import Almohadas from "./pages/productos/Almohadas";
import Amenities from "./pages/productos/Amenities";
import BatasBano from "./pages/productos/BatasBano";
import Edredones from "./pages/productos/Edredones";
import MantaPolar from "./pages/productos/MantaPolar";
import PieDeCama from "./pages/productos/PieDeCama";
import PisoDeBano from "./pages/productos/PisoDeBano";
import ProtectorColchon from "./pages/productos/ProtectorColchon";
import Sabanas from "./pages/productos/Sabanas";
import Toallas from "./pages/productos/Toallas";
import FundaDuvet from "./pages/productos/FundaDuvet";

function App() {
  return (
    <BrowserRouter>

      {/* 👇 SCROLL AUTOMÁTICO */}
      <ScrollToTop />

      {/* HEADER */}
      <HeaderTop />
      <Navbar />

      {/* RUTAS */}
      <Routes>

        {/* PRINCIPALES */}
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* PRODUCTOS */}
        <Route path="/almohadas" element={<Almohadas />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/batas-bano" element={<BatasBano />} />
        <Route path="/edredones" element={<Edredones />} />
        <Route path="/manta-polar" element={<MantaPolar />} />
        <Route path="/pie-de-cama" element={<PieDeCama />} />
        <Route path="/piso-de-bano" element={<PisoDeBano />} />
        <Route path="/protector-colchon" element={<ProtectorColchon />} />
        <Route path="/sabanas" element={<Sabanas />} />
        <Route path="/toallas" element={<Toallas />} />
        <Route path="/funda-duvet" element={<FundaDuvet />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;