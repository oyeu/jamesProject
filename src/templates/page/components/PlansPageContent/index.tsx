import React from "react"
import RichText from "../../../../components/RichText"
import styled from "styled-components"
import { navigate } from "gatsby"
import "./index.css"

interface Props {
  backgroundImage: any
}
const PageContentWrapper = styled.section<Props>`
  ::after {
    background-image: url("${(props: any) => props.backgroundImage}");
  }
}
`

const PlansPageContent = ({
  subtitle,
  content,
  image1,
  image2,
  image3,
  backgroundImage,
}: any) => {
  return (
    <PageContentWrapper
      className="page-content-wrapper"
      backgroundImage={backgroundImage}
    >
      <div className="page-subtitle">
        <RichText render={subtitle} />
      </div>
      <div className="plan-content">
        <div className="left-side-content">
          <div className="plans-description">
            <RichText render={content} />
          </div>
        </div>
        <div className="right-side-content">
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
      <h4>¿Tienes dudas?</h4>
      <div className="button-grid">
        <button
          className="help-button"
          onClick={() => {
            navigate("https://wa.link/0j7qpr")
          }}
        >
          WhatsApp
        </button>
        <button
          className="help-button"
          onClick={() => {
            navigate("/contact-page")
          }}
        >
          Formulario
        </button>
      </div>
    </PageContentWrapper>
  )
}

export default PlansPageContent
