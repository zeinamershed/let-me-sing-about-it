import githublogo from '../assets/images/githublogo.jpg';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFile,
	faHouse,
	faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
      <div className="footer">
          
         <a href="https://github.com/zeinamershed/let-me-sing-about-it">
            <img src={githublogo} alt="github-logo"/> 
         
         <h5>GitHub Repositories</h5>
        </a>
        <NavLink to="/About"><FontAwesomeIcon icon={faFile} /> <span>About Us</span></NavLink>
      </div>
    )
  }
  
  export default Footer