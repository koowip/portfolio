import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../styles/Header.css';

export default function Header () {

  return (
    <>
    <div className="header-box">
      <h1>Patrick</h1>
      <div className="links">
        <a href="https://github.com/koowip">
          <FaGithub size={25}/>
        </a>
        <a href="https://www.linkedin.com/in/patrickdeanwhiteswe/">
          <FaLinkedin size={25}/>
        </a>
      </div>
    </div>
    </>
  )
}