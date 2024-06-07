import githublogo from '../assets/images/githublogo.jpg';

const Footer = () => {
    return (
      <div className="footer">
          
         <a href="https://github.com/zeinamershed/let-me-sing-about-it">
            <img src={githublogo} alt="github-logo"/> 
         </a>
         <h5>GitHub Repositories</h5>
        
      </div>
    )
  }
  
  export default Footer