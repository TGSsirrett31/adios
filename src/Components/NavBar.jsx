import '../Css/NavBar.css';
import React, { useState, useEffect } from 'react';

function NavBar() {
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer para detectar qué sección está visible
  useEffect(() => {
    const sections = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px', // Activa cuando la sección está en el 20% superior de la pantalla
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveLink(sectionId);
        }
      });
    };

    // Crear observador para cada sección
    sections.forEach((sectionName) => {
      const section = document.getElementById(sectionName);
      if (section) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(section);
        observers.push(observer);
      }
    });

    // Cleanup
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);

    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    console.log(`Navegando a: ${link}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="logo">
          <span className="dot">•</span>SIRRETT
        </div>
        <button className="menu-button" onClick={toggleMobileMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
            <li key={link}>
              <button
                className={activeLink === link ? 'active' : ''}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;