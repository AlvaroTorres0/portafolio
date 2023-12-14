import React from 'react'
import tienda from "../../assets/proyectos/tienda.png";
import attendance from "../../assets/proyectos/ia.png";
import npa from "../../assets/proyectos/npa.png";
import bdsat from "../../assets/proyectos/bdsat.png";
import './Proyectos.css'
import angular from "../../assets/icons/angular.png";
import azure from "../../assets/icons/azure.png";
import mongodb from "../../assets/icons/mongo.png";
import react from "../../assets/icons/react.png";
import figma from "../../assets/icons/figma.png";
import postgres from "../../assets/icons/postgresql.png";
import typescript from "../../assets/icons/typescript.png";


function Proyectos() {
  const infoProyectos = [
    {nombre:"Tienda en línea", descripcion:"Utilizando un servicio de BlobStorage de Azure y MongoDB como Base de datos", icons:[angular,azure,mongodb], imagen: tienda},
    {nombre:"Reconocimiento con IA", descripcion:"Potenciado con Custom Vision, el servicio de Inteligencia Artificial de Azure", icons:[angular,azure,mongodb], imagen:attendance},
    {nombre:"NPA SAT", descripcion:"Página web para el SAT, hecha con React ", icons:[react,figma], imagen: npa},
    {nombre:"Búsqueda de tablas y campos", descripcion:"Aplicación web para el SAT, hecha con Angular y PostgreSQL", icons:[angular,postgres,typescript], imagen: bdsat}
  ]
  return (
    <section className='container-principal_proyectos section' id="projects">
        <div className='proyectos'>
          <h3 className='title'>Proyectos</h3>

          <article className="container-proyectos">
            {
              infoProyectos.map((proyecto,index) => {
                const {nombre,descripcion,icons,imagen} = proyecto;
                return(
                  <article key={index} className='proyecto'>
                    <img src={imagen} alt="" />

                    <div className="container-sombra">
                      <div className="container-info-proyecto">
                        <span className='nombre-proyecto'>{nombre}</span>
                        <p className='desc-proyecto'>{descripcion}</p>

                        <div className="proyecto-tecnologias">
                          {
                            icons.map((icon,index)=>{
                              return(
                                <img key={index} src={icon} alt="" />
                              )
                            })
                          }                        
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })
            }
          </article>
        </div>
      </section>
  )
}

export default Proyectos