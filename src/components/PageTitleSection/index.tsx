import { navigate } from "gatsby"
import React from "react"
import RichText from "../RichText"
import "./index.css"

const PageTitleSection = ({ title }: any) => {
  return (
    <section className="page-title-wrapper">
      <button
        className="back-button"
        onClick={() => {
          navigate(-1)
        }}
      >
        <div>
          <i className="arrow left" />
        </div>
        <div>Volver</div>
      </button>
      <div className="title">
        <RichText render={title} />
      </div>
    </section>
  )
}

export default PageTitleSection
