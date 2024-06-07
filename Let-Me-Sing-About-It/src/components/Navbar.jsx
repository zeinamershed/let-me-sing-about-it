import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFile, faHouse} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
          <nav>
            <div className ="navbar-icons">
                <FontAwesomeIcon icon={faHouse} />
                <FontAwesomeIcon icon={faFile} />
            </div>
          </nav>
        
      );
    }

export default Navbar