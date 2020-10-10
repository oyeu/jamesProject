import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const ContactButtonWrapper = styled.div`
  padding: 20px;
  font-size: 20px;
  text-align: center;
`

const ContactButton = () => {
  return (
    <ContactButtonWrapper>
      ¿Tienes dudas?, puedes contactarnos <Link to={"/contact-page"}>aqui</Link>
    </ContactButtonWrapper>
  )
}

export default ContactButton
