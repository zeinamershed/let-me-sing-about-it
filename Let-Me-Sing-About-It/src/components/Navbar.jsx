import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFile, faHouse} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
          <nav>
            <div className ="navbar-icons">
            <Link to="/"><FontAwesomeIcon icon={faHouse} /> <span>Home Page</span></Link>
            <h1>Let Me Think About It</h1>
            <Link to="/About"><FontAwesomeIcon icon={faFile} /> <span>About Us</span></Link>
            </div>
          </nav>
        
      );
    }

export default Navbar