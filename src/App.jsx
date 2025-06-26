import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfoli from "./Portfoli";
import CertificatesPage from "./CertificatesPage"; // You’ll create this next

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Routes>
          <Route path="/" element={<Portfoli />} />
          <Route path="/certificates" element={<CertificatesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
