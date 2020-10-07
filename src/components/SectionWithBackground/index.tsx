import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.section<any>`
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
`

const SectionWithBackground = ({ backgroundImage }: any) => {
  return <SectionWrapper backgroundImage={backgroundImage} />
}

export default SectionWithBackground
