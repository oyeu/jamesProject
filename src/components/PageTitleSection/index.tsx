import React from "react"
import styled from "styled-components"
import RichText from "../RichText"

const PageTitleWrapper = styled.section`
  background: #eee;
  color: #000f38;
  text-align: center;
`

const PageTitleSection = ({ title }: any) => {
  return (
    <PageTitleWrapper>
      <RichText render={title} />
    </PageTitleWrapper>
  )
}

export default PageTitleSection
