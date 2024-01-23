import { MdEmail } from "react-icons/md";

import '../styles/Footer.css'

export default function Footer () {

  return (
    <>
      <hr></hr>
      <div className="footer-box">
        <span>Patrick White</span>
        <a href="mailto:patrickwhite.swe@gmail.com" target="_self">
          <MdEmail />
        </a>
      </div>
    </>
  )
}