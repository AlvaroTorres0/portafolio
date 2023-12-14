import React from 'react'
import './inicio.css'
import gitHub from "../../assets/icons/github-redondo.png";
import microsoft from "../../assets/icons/microsoft.png";
import gitlab from "../../assets/icons/gitlab.png";
import linkedin from "../../assets/icons/linkedin.png";
import principal from "../../assets/principal.png";

function Inicio() {

  function descargarArchivo(){ 
    const url = 'https://ktwuchnbbobnekfrdeai.supabase.co/storage/v1/object/public/cv-alvaro/CV.pdf?t=2023-09-22T03%3A24%3A46.500Z';
    const nombreArchivo = "CV-Alvaro-Torres.pdf";
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            //! Crear un enlace para descargar el archivo
            const enlaceDescarga = document.createElement('a');
            enlaceDescarga.href = URL.createObjectURL(blob);
            enlaceDescarga.download = nombreArchivo;
            enlaceDescarga.style.display = 'none';
  
            //! Agregar el enlace al documento y hacer clic en él
            document.body.appendChild(enlaceDescarga);
            enlaceDescarga.click();
  
            //! Limpiar el objeto URL y eliminar el enlace
            URL.revokeObjectURL(enlaceDescarga.href);
            document.body.removeChild(enlaceDescarga);
                    
          })
          .catch(error => {
            console.error('Error al descargar el archivo:', error);
          });
    }

  return (
      <section className='container-principal_inicio section' id="principal">

        <article className='section-data'>
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
              <button onClick={descargarArchivo} className='descargarCV'>Descargar CV</button>
            </div>    
          </div>
        </article>


        <article className='section-img'>
          <img src={principal} alt="" />
        </article>


      </section>


    
  )
}

export default Inicio