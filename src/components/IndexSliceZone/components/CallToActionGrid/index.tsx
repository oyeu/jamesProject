import React from "react"
import RichText from "../../../RichText"
import CallToActionBlock from "./components/CallToActionBlock"
import "./index.css"

const CallToActionGrid = ({ title, callToActions }: any) => {
  return (
    <section className="call-to-action-grid">
      <div className="call_to_action_section_title">
        <RichText render={title} />
      </div>
      <div className="table" />
      <div className="call-to-actions">
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
      </div>
    </section>
  )
}

export default CallToActionGrid
