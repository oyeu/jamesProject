import React from "react"
import RichText from "../../../RichText"
import styled from "styled-components"
import DemoButton from "../../../DemoButton"
import { Carousel } from "react-bootstrap"
import "./index.css"

const SlideWrapper = styled.div<any>`
  background-image: url("${(props: any) => props.backgroundImage}");
`

const mainSlide = ({ title, content, backgroundImages }: any) => {
  return (
    <>
      <section className="slice-wrapper">
        <Carousel pause={false}>
          {backgroundImages.map((img: any, i: any) => {
            return (
              <Carousel.Item key={i}>
                <SlideWrapper
                  className="slide-wrapper"
                  backgroundImage={img.main_slide_image.url}
                >
                  <div className="content-wrapper">
                    <div className="slide-content">
                      <RichText render={title} />
                      {content}
                      <DemoButton
                        className="header-demo-button main-slide-margin"
                        text="¡Solicita tu Demo gratis!"
                      />
                    </div>
                  </div>
                </SlideWrapper>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </section>
    </>
  )
}

export default mainSlide
