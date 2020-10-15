import React from "react"
import styled from "styled-components"
import RichText from "../RichText"

const PageTitleWrapper = styled.section`
  background: #ca0603;
  color:white;
  text-align: center;
  border:solid;
  border-color: #dcda15;
  border-style:groove;
`

const PageTitleSection = ({ title }: any) => {
  return (
    <PageTitleWrapper>
      <RichText render={title} />
    </PageTitleWrapper>
  )
}

export default PageTitleSection
