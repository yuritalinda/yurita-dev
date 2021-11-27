import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Components/nav.css';
import { faCat, faHandshake, faHouseChimney, faLaptopCode } from '@fortawesome/free-solid-svg-icons';


const Navbar=() => {


  return (
    <div className="navbar">


        <nav className="navigation">
            <ul>
              <li><a href="#home"><FontAwesomeIcon icon={faHouseChimney} /></a></li>
              <li><a href="#bio"><FontAwesomeIcon icon={faCat} /></a></li>
              <li><a href="#portafolio"><FontAwesomeIcon icon={faLaptopCode} /></a></li>
              <li><a href="#contact"><FontAwesomeIcon icon={faHandshake} /></a></li>
            </ul>
        </nav>

    </div>
  )
};

export default Navbar;