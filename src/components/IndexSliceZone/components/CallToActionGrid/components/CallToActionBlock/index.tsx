import React from "react"
import RichText from "../../../../../RichText"
import { Link } from "gatsby"
import "./index.css"

const CallToActionBlock = ({
  title,
  content,
  buttonDestination,
  buttonLabel,
  featuredImage,
}: any) => {
  return (
    <>
      <section className="cta-block-wrapper">
        <div className="cta-content">
          <div className="title">
            <RichText render={title} />
          </div>
          <div className="content">
            <RichText render={content} />
          </div>
        </div>
        <div className="cta-img">
          <img src={featuredImage} alt="" />
        </div>
      </section>
      <section className="cta-block-wrapper-mobile">
        <div className="title-mobile">
          <RichText render={title} />
        </div>
        <div className="cta-content-mobile">
          <div className="content-mobile">
            <RichText render={content} />
          </div>
          <div className="cta-img-mobile">
            <img src={featuredImage} alt="" />
          </div>
        </div>
      </section>
      <div className="button-mobile">
        <Link to={buttonDestination}>
          <span />
          <span />
          <span />
          <span />
          {buttonLabel}
        </Link>
      </div>
      <div className="button-desktop">
        <Link to={buttonDestination}>
          <span />
          <span />
          <span />
          <span />
          {buttonLabel}
        </Link>
      </div>
    </>
  )
}

export default CallToActionBlock
