import React from 'react'
import Navbar from '../../Components/Navbar'
import '../Header/header.css'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Header() {


  return (
    <header className="header-container responsive-header" id="home">
    <Navbar />
      <div className="text-wrapper">
        <h2 className="hello">Hello...</h2>
        <h1 className="name">I'm Yuri Baptista</h1>
        <h3 className="profession">Web Front-end Developer & Profesional Makeup Artist</h3>
      
      <div className="icon-wrapper">
        <a href="https://github.com/yuritalinda/yuritalinda/blob/main/README.md" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icon" icon={faGithubSquare} /> 
        </a>
        <a href="https://www.linkedin.com/in/yuritalinda/" target='_blank' rel='noreferrer'>
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
      </div>
      </div>

      <div className="header-img">
        <img src="https://i.postimg.cc/Jh0X3ZJ6/header-img.png" alt="" srcset="" />
      </div>

    </header>
  )
}

export default Header
