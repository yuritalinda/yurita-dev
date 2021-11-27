import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import '../Footer/footer.css';

function Footer() {
  return (
<div className="contact" id="contact">
  <footer className="footer-container">

  
    <h1 className="footer-title">
      Wanna hire me?
    </h1>


    <div className="download-container">
    <a download="Yuri_Baptista_Resume.PDF" href="src/Assets/Docs/Yuri_Baptista_Resume.PDF">
    <FontAwesomeIcon className="link-icon" icon={faFileDownload} />
    </a>

    <h3>Download my resume</h3>
    </div>

    <div className="image-container">
    <img src="https://i.postimg.cc/W1cG2cRk/footer-img.png" alt="footer-img" className="footer-img" />
    </div>

    <div className="footer-credits-container">
      <h5 className="credit">
        This site was made by me Yuri Baptista
      </h5>
      <h6 className="inspiration">
      And it was <span>copied</span> inspired by <a href="https://www.lolarufino.dev/">Lola Rufino</a>
      </h6>

    </div>
  </footer>
</div>
  )
}

export default Footer
