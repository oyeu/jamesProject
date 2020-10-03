import React from "react"
import styled from "styled-components"
import RichText from "./RichText"
import { Link } from "gatsby"

const CallToActionBlockWrapper = styled.section`
  padding: 20px;
  margin: 10px;
  background: #eee;
  border-radius: 5px;

  .call-to-action-content {
    display: flex;
    .featured-image-wrapper {
      margin: 0 10px;
      background: white;
      padding: 10px;
      border-radius: 10px;
      margin-left: auto;
      display: flex;
      align-self: center;
    }
    img {
      max-width: 200px;
      margin: 0;
    }
  }
`

const Button = styled.div`
  background: #000f38;
  display: inline-block;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
    padding: 4px 8px;
    display: inline-block;
  }
`

const CallToActionBlock = ({
  title,
  content,
  buttonDestination,
  buttonLabel,
  featuredImage,
}: any) => {
  return (
    <CallToActionBlockWrapper>
      <RichText render={title} />
      <div className="call-to-action-content">
        <div>
          <RichText render={content} />
        </div>
        <div className="featured-image-wrapper">
          <img src={featuredImage} alt="" />
        </div>
      </div>
      <Button>
        <Link to={buttonDestination}>{buttonLabel}</Link>
      </Button>
    </CallToActionBlockWrapper>
  )
}

export default CallToActionBlock
