import React from "react"
import styled from "styled-components"
import RichText from "./RichText"
import CallToActionBlock from "./callToActionBlock"

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`

const CallToActionGrid = ({ title, callToActions }: any) => {
  return (
    <CallToActionGridWrapper>
      <RichText render={title} />
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
