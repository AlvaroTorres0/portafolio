import { React, useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const elementosNav = [
    { propiedad: 'Inicio', clase: 'principal' },
    { propiedad: 'Sobre mí', clase: 'about' },
    { propiedad: 'Proyectos', clase: 'projects' },
    { propiedad: 'Certificados', clase: 'certifications' },
  ];

  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('.section');

    let closestSection = '';
    let closestDistance = Number.MAX_VALUE;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const distanceToCenter = Math.abs(scrollPosition - sectionTop + sectionHeight * 0.5 - windowHeight * 0.5);

      if (distanceToCenter < closestDistance) {
        closestDistance = distanceToCenter;
        closestSection = section.id;
      }
    });

    setActiveSection(closestSection);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleScroll(); // Calcular la sección activa después de un breve intervalo
    }, 200); // Ajustar el tiempo según sea necesario para permitir que el DOM se estabilice

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar-items'>
        <ul className='navbar-list'>
          {elementosNav.map((elemento) => {
            const { propiedad, clase } = elemento;
            return (
              <li key={propiedad} className={`navbar-list_item ${activeSection === clase ? 'seleccionado' : ''}`}>
                <a className='ref' href={`#${clase}`}>{propiedad}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
