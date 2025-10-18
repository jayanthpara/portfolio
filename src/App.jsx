import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfoli from "./Portfoli";
import CertificatesPage from "./CertificatesPage"; 
import GalleryPage from "./GalleryPage"; // You’ll create this next

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Routes>
          <Route path="/" element={<Portfoli />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
