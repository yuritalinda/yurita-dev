import React from 'react'
import '../Portafolio/portafolio.css'
import { projects } from '../Portafolio/data.js'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'



function Portafolio() {
  return (
    <div className="portafolio" id="portafolio">

      {projects.map((project) => (
      <section className="proyect-wrapper">
        <div className="proyect-title"><h2>{project.title}</h2></div>
        <div className="proyect-text-wrapper">
        <div className="preview"><img src={project.image} alt="Project Preview"></img> </div>
        <div className="stack"><p>{project.stack}</p></div>
        <div className="description"><p>{project.description}</p></div>
        <div className="links-wrapper">
           <a href={project.link.github} className="link">
             <FontAwesomeIcon className="link-icon" icon={faGithubAlt} />
            </a> 
           
           <a href={project.link.deploylink} className="link">
             <FontAwesomeIcon className="link-icon" icon={faLink} />
             </a> 
        </div>
        </div>
      </section>
      ))}
      
    </div>
  )
}

export default Portafolio
