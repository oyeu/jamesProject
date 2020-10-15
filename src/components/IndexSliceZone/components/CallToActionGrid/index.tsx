import React from "react"
import styled from "styled-components"
import RichText from "../../../RichText"
import CallToActionBlock from "./components/CallToActionBlock"

const CallToActionGridWrapper = styled.section`
  max-width: 900px;
  margin: auto;
  padding-bottom: 20px;

  .call_to_action_section_title {
    color: white;
    text-align: center;
    margin: 20px auto;
  }
`

const CallToActionGrid = ({ title, callToActions }: any) => {
  return (
    <CallToActionGridWrapper>
      <div className="call_to_action_section_title">
        <RichText render={title} />
      </div>
      {callToActions.map((callToAction: any, i: any) => {
        return (
          <CallToActionBlock
            key={i}
            content={callToAction.content}
            title={callToAction.call_to_action_title}
            buttonDestination={`/${callToAction.button_destination._meta.uid}`}
            buttonLabel={callToAction.button_label}
            featuredImage={callToAction.featured_image.url}
          />
        )
      })}
    </CallToActionGridWrapper>
  )
}

export default CallToActionGrid
