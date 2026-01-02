import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PhotoGallery from "./pages/PhotoGallery";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Staff from "./pages/Staff";
import WhatsAppButton from "./components/whatsappButton";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Always visible */}
      <Navbar />

      {/* Page content grows */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </main>
      <WhatsAppButton />
      {/* Always visible */}
      <Footer />
    </div>
  );
}

export default App;
