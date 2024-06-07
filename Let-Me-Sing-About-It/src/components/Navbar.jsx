import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFile, faHouse} from "@fortawesome/free-solid-svg-icons"
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  
    return (
          <nav className='nav'>
            <div className ="navbar-icons">
            <NavLink to="/"><FontAwesomeIcon icon={faHouse} /> <span>Home Page</span></NavLink>
            <h1>Let Me Sing About It</h1>
            <NavLink to="/About"><FontAwesomeIcon icon={faFile} /> <span>About Us</span></NavLink>
            </div>
          </nav>
        
      );
    }

export default Navbar