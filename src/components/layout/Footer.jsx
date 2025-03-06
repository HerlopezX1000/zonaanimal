// src/components/layout/Footer.jsx
import '../../styles/components/footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Para íconos de redes

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor footer-contenido">
        {/* Izquierda: Logo con redes encima */}
        <div className="footer-logo">
          <div className="footer-redes">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
          <Link to="/">
            <img src="/logo.png" alt="Zona Animal" />
          </Link>
        </div>

        {/* Centro: Menú vertical */}
        <nav className="footer-menu">
          <ul>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/noticias">Noticias</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        {/* Derecha: Contactos alineados horizontalmente */}
        <div className="footer-contacto">
          <div className="contacto-datos">
            <p><strong>Contacto</strong></p>
            <p>+38 (095) 71 06 104</p>
            <p>Barrio Alfonso Lopez Calle 8, Cimitarra, Santander, Colombia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;