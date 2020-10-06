import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Link } from "gatsby"

const PageWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  color: white;
  height: 100vh;
`
const ThankYouMessage = styled.div`
  padding: 40px;

  a {
    color: inherit;
  }
`

const ContactSuccess = () => {
  return (
    <Layout>
      <PageWrapper>
        <ThankYouMessage>
          <h1>¡Gracias por comunicarte con nosotros!</h1>
          <h2>Nos estaremos comunicando contigo en breve</h2>
          <Link to="/">Volver al inicio</Link>
        </ThankYouMessage>
      </PageWrapper>
    </Layout>
  )
}

export default ContactSuccess
