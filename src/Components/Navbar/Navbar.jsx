import {React, useState, useEffect} from 'react'
import './Navbar.css'
import iconDev from "../../assets/dev.png";

function Navbar() {

  const elementosNav = [
    {propiedad: "Inicio", clase: "principal"},
    {propiedad: "Sobre mí", clase: "about"},
    {propiedad: "Proyectos", clase: "projects"},
    {propiedad: "Certificados", clase: "certifications"}
  ]

  //* Métodos para los items de la navbar
  const changeState = (elemento) =>{
    disabledAnexos();
      const anexoClickeado = document.querySelector(`.${elemento}`);
      anexoClickeado.classList.add("seleccionado");    
  }

  const disabledAnexos = () => {
    const anexos = document.querySelectorAll('.navbar-list_item');
    for (const anexo of anexos) {
      anexo.classList.remove("seleccionado");
    }
  }

  const [displayResolutions, setDisplayResolutions] = useState(window.innerWidth);

  useEffect(() => {
    setDisplayResolutions(window.innerWidth);
  }, [displayResolutions]); 


  return (
    displayResolutions > 768 ? (
      <nav className='navbar'>
        <div className="navbar-icondev">
          <img className='icondev' src={iconDev} alt="" />
        </div>
  
        <div className="navbar-items">
          <ul className='navbar-list'>
            {
              elementosNav.map(elemento => {
                const { propiedad, clase } = elemento;
                return (
                  <li className={`navbar-list_item ${clase}`} onClick={() => changeState(clase)}>
                    <a className='ref' href={`#${clase}`}>{propiedad}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    ) : null
  )
}

export default Navbar