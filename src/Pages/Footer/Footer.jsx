import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import '../Footer/footer.css';

function Footer() {
  return (
<div className="contact" id="contact">
  <footer className="footer-container">

  <div className="resume-wrapper">
    <h1 className="footer-title">
      Wanna hire me?
    </h1>
   <div className="download-container">
        <a download="Yuri_Baptista_Resume.PDF" href="https://pdfhost.io/v/bri79j6.d_Yuri_Baptista_ResumePDF" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="link-icon" icon={faFileDownload} />
        </a>
        <h3>Download my resume</h3>
    </div>
    </div>


    <div className="footer-credits-container">
    <div className="image-container">
    <img src="https://user-images.githubusercontent.com/73949701/143720793-db1429ae-0fa6-4188-aa49-3795f7e65f3c.png" alt="footer-img" className="footer-img" />
    </div>
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
