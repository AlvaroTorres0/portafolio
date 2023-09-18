import React from 'react'
import './inicio.css'
import gitHub from "../../assets/icons/github-redondo.png";
import microsoft from "../../assets/icons/microsoft.png";
import gitlab from "../../assets/icons/gitlab.png";
import linkedin from "../../assets/icons/linkedin.png";
import principal from "../../assets/principal.png";

function Inicio() {
  return (
    <section className='container-principal_inicio' id="principal">
      <div className="section-inicio">
        <section className='section-data'>
          <h1 className='section-data_title'>Álvaro Torres</h1>
          
          <div className="section-data_info">
            <h2 className='section-data_info-principal'>Desarrollador Web Frontend</h2>
            <p className='section-data_info-phrase'>Transformando tus ideas en realidad con mi experiencia en el desarrollo</p>
          </div>

          <div className="section-data_icons-btn">
            <div className="section-data_icons">
              <img className='data-icons' src={linkedin} alt="" />
              <img className='data-icons' src={gitHub} alt="" />
              <img className='data-icons' src={gitlab} alt="" />
              <img className='data-icons' src={microsoft} alt="" />  
            </div>  

            <div className="section-data_button">
              <button className='descargarCV'>Descargar CV</button>
            </div>    
          </div>
        </section>


        <section className='section-img'>
          <img src={principal} alt="" />
        </section>

      </div>


    </section>
  )
}

export default Inicio