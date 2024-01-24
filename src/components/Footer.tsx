import { MdEmail } from "react-icons/md";
import { AiFillFile } from "react-icons/ai";

import '../styles/Footer.css'

export default function Footer () {

  return (
    <>
      <hr></hr>
      <div className="footer-box">
        <span>Patrick White</span>
        <div className="footer-links">
        <a href="mailto:patrickwhite.swe@gmail.com" target="_self">
          <MdEmail />
        </a>
        <a href='/Patrick White Resume.pdf' target='_blank'>
          <AiFillFile />
        </a>
        </div>
      </div>
    </>
  )
}