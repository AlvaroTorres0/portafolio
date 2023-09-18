import React from 'react'
import './Certificados.css'
import azure from "../../assets/certificados/azure.jpg";
import apis from "../../assets/certificados/apis.jpg";
import css from "../../assets/certificados/css.jpg";
import dom from "../../assets/certificados/dom.jpg";

function Certificados() {
    const infoCertificados = [
        {nombre:"Certificación AZ-900", descripcion:"Certificación internacional de Microsoft en Azure, servicios básicos, soluciones y herramientos, seguridad general y de red, identidad, gobernanza, privacidad y complimiento, precios", imagen: azure},
        {nombre:"Web API´s", descripcion:"Creación y consumo de una API REST con JavaScript, fetching, asincronía, callbacks a profundidad y promesas.", imagen:apis},
        {nombre:"Fundamentos de CSS", descripcion:"Principios básicos, estructuras, selectores, propiedades de caja, posicionamiento, colorización, Flex-box, Grid y responsive design.", imagen: css},
        {nombre:"JavaScript y el DOM", descripcion:"Variable, tipos de datos, ciclos y condicionales, arrays, POO, métodos de cadena, métodos de arrays, manejo de consola y el DOM", imagen: dom}
      ]
      return (
        <section className='container-principal_certificaciones' id="certifications">
          <div className='certificados'>
            <h3 className='title'>Certificaciones</h3>
    
            <section className="container-certificaciones">
              {
                infoCertificados.map(certificado => {
                  const {nombre,descripcion,imagen} = certificado;
                  return(
                    <article className='certificado'>
                      <img src={imagen} alt="" />
    
                      <div className="container-sombra">
                        <div className="container-info-certificado">
                          <span className='nombre-certificado'>{nombre}</span>
                          <p className='desc-certificado'>{descripcion}</p>
                        </div>
                      </div>
                    </article>
                  )
                })
              }
            </section>
          </div>
        </section>
      )
}

export default Certificados