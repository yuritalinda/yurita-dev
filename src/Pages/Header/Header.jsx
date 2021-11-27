import React from 'react'
import Navbar from '../../Components/Navbar'
import '../Header/header.css'


function Header() {


  return (
    <header className="header-container" id="home">
    <Navbar />
      <div className="text-wrapper">
        <h2 className="hello">Hello...</h2>
        <h1 className="name">I'm Yuri Baptista</h1>
        <h3 className="profession">Web Front-end Developer & Profesional Makeup Artist</h3>
      </div>
      <div className="icon-wrapper">
        <a href="https://github.com/yuritalinda" target="_blank" rel="noreferrer">
        <img className="icon" src="https://i.postimg.cc/PxQRmbTp/github.png" alt="github-icon"/>
        </a>
        <a href="https://www.linkedin.com/in/yuritalinda/" target='_blank' rel='noreferrer'>
        <img className="icon" src="https://i.postimg.cc/d3QSn7VW/linkedin.png" alt="linkedin-icon"/>
        </a>
      </div>

      <div className="header-img">
        <img src="https://i.postimg.cc/Jh0X3ZJ6/header-img.png" alt="" srcset="" />
      </div>

    </header>
  )
}

export default Header
