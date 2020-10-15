import React from "react"
import RichText from "../RichText"
import styled from "styled-components"
import { navigate } from "gatsby"

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

  .page_title {
    text-align: center;
  }

  .content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    .left-side-content {
    }

    .right-side-content {
      div img {
        max-width: 300px;
      }
    }
  }
`

const ButtonsGrid = styled.div`
  display: flex;
  button {
    margin: auto;
    width: 40%;
    background:#dcda15;
    border-radius: 15px;
    border: solid;
    border-style: outset;
    border-width: 5px;
    border-color: #ca0603;

    :hover {
      background: #ca0603;
      border-color: #dcda15;
      color: white;
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
      <div className="content">
        <div className="left-side-content">
          <div className="page_subtitle">
            <RichText render={subtitle} />
          </div>
          <div className="plans_description">
            <RichText render={content} />
          </div>
          <ButtonsGrid>
            <button
              onClick={() => {
                navigate("https://wa.link/0j7qpr")
              }}
            >
              WhatsApp
            </button>
            <button
              onClick={() => {
                navigate("/contact-page")
              }}
            >
              Formulario
            </button>
          </ButtonsGrid>
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
