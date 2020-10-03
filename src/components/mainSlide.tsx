import React from "react"
import RichText from "./RichText"
import styled from "styled-components"

const Content = styled.p``
const Title = styled.div``
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
    max-width: 800px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.5);
  }
`

const mainSlide = ({ title, content, backgroundImage }: any) => {
  return (
    <SliceWrapper backgroundImage={backgroundImage}>
      <div>
        <Title>
          <RichText render={title} />
        </Title>
        <Content>{content}</Content>
      </div>
    </SliceWrapper>
  )
}

export default mainSlide
