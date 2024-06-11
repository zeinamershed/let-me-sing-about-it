import githublogo from '../assets/images/githublogo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="footer">
          
         <a href="https://github.com/zeinamershed/let-me-sing-about-it">
            <img src={githublogo} alt="github-logo"/>                
        </a>
        <div></div>
        <NavLink to="/About"><span>About Us</span></NavLink>
      </div>
    )
  }
  
  export default Footer