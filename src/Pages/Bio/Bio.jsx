import React from 'react'
import '../Bio/bio.css'

function Bio() {
  return (
<div className="bio responsive-wrapper" id="bio">
  <article className="bio-article">
    <div className="title">
      <h1>About me</h1>
      </div>
      <p className="bio-text">De maquilladora profesional a front-end developer. 
        Soy una apasionada de las manualidades y encontré 
        en el desarrollo las herramientas necesarias para llevar a otro nivel mi pasión por crear "cosas". </p>
      <p className="bio-text">Por cuestiones del destino empecé a estudiar HTML, CSS y JS por mi cuenta, haciendo todo tutorial que se me atravesara.
        Un tiempo después postulé y quedé en el mejor Bootcamp de la historia: Laboratoria. 
        No me podía creer que fui elegida entre las miles de postulantes para pasar los 6 meses más hermosos de mi vida.</p>
        <p className="bio-text">Mi hobby favorito es acariciar gatos y perros en la calles.</p>
        
    
  </article>

  <article className="bio-article">
    <div className="title">
      <h1>Experience</h1>
      </div>
      <p className="bio-text">Como profesional de la belleza, con casi 10 años de experiencia, aprendí a adaptarme a mi entono y adaptar mis técnicas 
        para satisfacer las necesidades de mis clientes, sin descuidar la atención a los detalles. Así mismo desarrollé 
        la paciencia que requiere lidiar con diferentes personas y sus diferentes necesidades.</p>
      <p className="bio-text">Luego abrí un salón de belleza 100% #crueltyfree y con ésto conocí el mundo de los negocios, lo que me permitió afianzar mis habilidades
        interpersonales con el fin de lograr alianzas comerciales que beneficiarían a mi empresa.
      </p >
    
  </article>

  <article className="bio-article">
    <div className="title">
      <h1>Skills</h1>
      </div>
      <p className="bio-text">Me especializo en aplicaciones web usando Javascript y React, me encanta cuando tengo que codear la parte del HTML y CSS.
         He utilizado Bootstrap y otras herramientas que me permitan crear un sitio con la mejor experiencia de usuario posible.
         Trabajo bajo metodologías ágiles, como Scrum y Kanban, además manejo Git/GitHub. </p>

         <p className="bio-text"> Puedo desarrollar proyectos completos desde la fragmentación del problema hasta su lanzamiento a producción, esto incluye UX/UI,
           diseño en Figma, maquetación, llamados a APIs, creación de base de datos con Firebase, etc. Actualmente estoy aprendiendo NextJs, 
           lo que me permitirá optmimizar mis proyectos a futuro.
         </p >
    
  </article>
</div>

  )
}

export default Bio
