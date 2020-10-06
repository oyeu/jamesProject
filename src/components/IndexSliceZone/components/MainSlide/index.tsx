import React from "react"
import RichText from "../../../RichText"
import styled from "styled-components"
import DemoButton from "../../../DemoButton"

interface Props {
  backgroundImage: any
}

const SliceWrapper = styled.section<Props>`
  background: url("${(props: any) => props.backgroundImage}");
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(140vh - 50vh);
  display: flex;
  align-items: center;
  text-align: center;
  color: white;

  div {
    display: inherit;
    max-width: 1000px;
    margin: 0 auto;

    .logo {
      display: flex;
      max-width: 250px;
      img {
        margin: auto;
      }
    }

    .slide-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.5);

      h1 {
        margin: 0px;
      }
    }
  }
`

const mainSlide = ({ title, content, backgroundImage }: any) => {
  return (
    <SliceWrapper backgroundImage={backgroundImage}>
      <div>
        <div className="slide-content">
          <RichText render={title} />
          {content}
          <DemoButton type={"main-slide"} />
        </div>
      </div>
    </SliceWrapper>
  )
}

export default mainSlide
