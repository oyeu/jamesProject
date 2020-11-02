import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"
import "./index.css"

const ContactSuccess = () => {
  return (
    <Layout>
      <div className="success-contact-page-wrapper">
        <h1>¡Gracias por comunicarte con nosotros!</h1>
        <h2>Nos estaremos comunicando contigo en breve</h2>
        <div className="back-home-button">
          <Link to="/">
            <span />
            <span />
            <span />
            <span />
            Volver al inicio
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default ContactSuccess
