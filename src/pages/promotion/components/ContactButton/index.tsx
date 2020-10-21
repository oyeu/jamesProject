import { Link } from "gatsby"
import React from "react"
import "./index.css"

const ContactButton = () => {
  return (
    <div className="contact-button-wrapper">
      ¿Tienes dudas?, puedes contactarnos <Link to={"/contact-page"}>aqui</Link>
    </div>
  )
}

export default ContactButton
