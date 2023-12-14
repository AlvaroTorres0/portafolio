import React,{useEffect} from 'react'
import './SobreMi.css'
import foto from "../../assets/foto.jpg";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import js from "../../assets/icons/javascript.png";
import react from "../../assets/icons/react.png";
import angular from "../../assets/icons/angular.png";
import github from "../../assets/icons/github.png";
import gitlab from "../../assets/icons/gitlab.png";
import mongo from "../../assets/icons/mongo.png";
import azure from "../../assets/icons/azure.png";
import postgresql from "../../assets/icons/postgresql.png";
import typescript from "../../assets/icons/typescript.png";
import tailwind from "../../assets/icons/tailwind.png";

function SobreMi() {
    const iconos = [
        html,
        css,
        js,
        react,
        angular,
        github,
        gitlab,
        mongo,
        azure,
        postgresql,
        typescript,
        tailwind,
      ];



  return (
    <section className='container-principal_sobre-mi section' id='about'>
            <div className="sobre-mi">
                <div className="container-sobre-mi">
                    <h3 className='title'>Sobre mí</h3>
                    <div className="sobre-mi_informacion">
                        <div className="sobre-mi_informacion--foto">
                            <img className='foto' src={foto} alt="" />
                        </div>

                        <div className="sobre-mi_informacion--biografia">
                            <p className='biografia-principal'>Soy Álvaro Isaías Espíndola Torres, programador apasionado por el desarrollo web, la programación y la tecnología.</p>
                            <div className='biografia-secundaria'>
                                <p>
                                Mi objetivo es crear productos que ofrezca experiencias excepcionales, con un diseño atractivo, intuitivo y de alta calidad.
                                </p>
                                
                                <p>
                                Siempre estoy dispuesto a aprender nuevas tecnologías y afrontar nuevos desafíos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sobre-mi_educacion-tecnologias">
                    <article className='educacion'>
                        <h4 className='subtitle'>Educación</h4>

                        <div className="educacion-items">
                            <div className="educacion-item">
                                <span>Ingeniería en Sistemas Computacionales</span>
                                <span className='text-opacity'>Instituto Tecnológico de Cuautla</span>
                                <span className='text-opacity'>2019 - Presente</span>
                            </div>

                            <div className="educacion-item">
                                <span>Curso de certificación AZ-900</span>
                                <span className='text-opacity'>Innovacción Virtual</span>
                                <span className='text-opacity'>2021</span>
                            </div>
                        </div>

                    </article>

                    <article className='tecnologias'>
                        <h4 className='subtitle'>Tecnologías</h4>
                        
                        <div className="icons-tecnologias">
                            {
                                iconos.map((icon,index) => {
                                    return(
                                        <img key={index} className='icon-tecnologia' src={icon} alt="" />
                                    )
                                }) 
                            }
                        </div>
                    </article>
                </div>
            </div>
        </section>
  )
}

export default SobreMi