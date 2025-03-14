// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Inicio from "./components/pages/Inicio.jsx";
import Contacto from './components/pages/Contacto.jsx'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} /> {/* Usa el componente Inicio */}
            <Route path="/servicios" element={<h1>Servicios</h1>} />
            <Route path="/productos" element={<h1>Productos</h1>} />
            <Route path="/noticias" element={<h1>Noticias</h1>} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;