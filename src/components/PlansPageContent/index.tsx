import React from "react"
import RichText from "../RichText"
import styled from "styled-components"
import { navigate } from "gatsby"
import "./index.css"

interface Props {
  backgroundImage: any
}
const PageContentWrapper = styled.section<Props>`
  position: relative;
  background: #000f38;
  overflow: hidden;

  ::after {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.05;
    background-image: url("${(props: any) => props.backgroundImage}");
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
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
    <PageContentWrapper backgroundImage={backgroundImage}>
      <div className="plan-content">
        <div className="left-side-content">
          <div className="page_subtitle">
            <RichText render={subtitle} />
          </div>
          <div className="plans_description">
            <RichText render={content} />
          </div>
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
    </PageContentWrapper>
  )
}

export default PlansPageContent
