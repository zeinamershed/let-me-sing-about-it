import React from 'react'
import homeIcon from "../assets/home-icon.png"

const Navbar = () => {
    return (
          <nav>
            <img
              src={homeIcon}
              alt="home icon"
              style={{ height: "30px", width: "auto" }}
            />
          </nav>
        
      );
    }

export default Navbar