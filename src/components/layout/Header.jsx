// src/components/layout/Header.jsx


import '../../styles/components/header.css';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="contenedor header-contenido">
        <div className="header-logo">
          <Link to="/">
            <img src="/logo.png" alt="Zona Animal" />
          </Link>
        </div>
        <nav className="navbar-menu">
          <ul>
            <li><Link to="/"><i className="fas fa-home"></i> Inicio</Link></li>
            <li><Link to="/servicios"><i className="fas fa-paw"></i> Servicios</Link></li>
            <li><Link to="/productos"><i className="fas fa-shopping-cart"></i> Productos</Link></li>
            <li><Link to="/noticias"><i className="fas fa-newspaper"></i> Noticias</Link></li>
            <li><Link to="/contacto"><i className="fas fa-envelope"></i> Contacto</Link></li>
          </ul>
        </nav>
        <div className="header-right">
          <Link to="/login-veterinarios" className="login-link">
            <i className="fas fa-user-md"></i>
          </Link>
          <button className="hamburger" onClick={toggleMenu} aria-label="Abrir menú">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div ref={menuRef} className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}><i className="fas fa-home"></i> Inicio</Link></li>
            <li><Link to="/servicios" onClick={toggleMenu}><i className="fas fa-paw"></i> Servicios</Link></li>
            <li><Link to="/productos" onClick={toggleMenu}><i className="fas fa-shopping-cart"></i> Productos</Link></li>
            <li><Link to="/noticias" onClick={toggleMenu}><i className="fas fa-newspaper"></i> Noticias</Link></li>
            <li><Link to="/contacto" onClick={toggleMenu}><i className="fas fa-envelope"></i> Contacto</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;