import React from "react"
import RichText from "../../../RichText"
import styled from "styled-components"
import DemoButton from "../../../DemoButton"
import { Carousel } from "react-bootstrap"

const SliceWrapper = styled.section`
  height: calc(140vh - 50vh);
  align-items: center;
  text-align: center;
  color: white;

  div {
    height: inherit;
  }
`

const SlideWrapper = styled.div<any>`
  background-image: url("${(props: any) => props.backgroundImage}");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
  display: flex;

  .content-wrapper {
    max-width: 800px;
    margin: auto;
    height: auto;
    background: rgba(0, 0, 0, 0.5);

    .slide-content {
      margin: 0 auto;

      padding: 10px;

      h1 {
        margin: 0px;
      }
    }
  }
`

const mainSlide = ({ title, content, backgroundImages }: any) => {
  return (
    <>
      <SliceWrapper>
        <Carousel pause={false}>
          {backgroundImages.map((img: any, i: any) => {
            return (
              <Carousel.Item key={i}>
                <SlideWrapper backgroundImage={img.main_slide_image.url}>
                  <div className="content-wrapper">
                    <div className="slide-content">
                      <RichText render={title} />
                      {content}
                      <DemoButton type={"main-slide"} />
                    </div>
                  </div>
                </SlideWrapper>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </SliceWrapper>
    </>
  )
}

export default mainSlide
