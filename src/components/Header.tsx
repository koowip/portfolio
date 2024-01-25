import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../styles/Header.css';

export default function Header () {

  return (
    <>
    <div className="header-box">
      <h1 className="gradient-text">k00wip</h1>
      <div className="links">
        <a href="https://github.com/koowip" target="_blank">
          <FaGithub size={25}/>
        </a>
        <a href="https://www.linkedin.com/in/patrickdeanwhiteswe/" target="_blank">
          <FaLinkedin size={25}/>
        </a>
      </div>
    </div>
    </>
  )
}