import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const PageWrapper = styled.div`
    text-align:center;
    max-width:800px;
    margin: 0 auto;
    color:white;
`

const ContactSuccess = () => {
  return (
    <Layout>
        <PageWrapper>
            <h1>¡Gracias por comunicarte con nosotros!</h1>
        </PageWrapper>
    </Layout>
  )
}

export default ContactSuccess
