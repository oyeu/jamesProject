import React from "react"
import MainSlide from "./components/MainSlide"
import CallToActionGrid from "./components/CallToActionGrid"

const SliceZone = ({ body }: any) => {
  // console.log(body)
  return (
    <div>
      {body.map((bodyContent: any, i: any) => {
        if (bodyContent.type === "mainslice") {
          return (
            <MainSlide
              title={bodyContent.primary.home_main_slice_title}
              content={bodyContent.primary.home_main_slice_content}
              backgroundImage={bodyContent.primary.main_slide_image.url}
              logo={bodyContent.primary.logo.url}
              key={i}
            />
          )
        } else if (bodyContent.type === "call_to_action_grid") {
          return (
            <CallToActionGrid
              title={bodyContent.primary.section_title}
              key={i}
              callToActions={bodyContent.fields}
            />
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default SliceZone