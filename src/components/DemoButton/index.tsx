import React from "react"
import { Link } from "gatsby"
import "./index.css"

const DemoButton = ({ className, text }: any) => {
  return (
    <div className={className}>
      <Link to="/demo-page">
        <span />
        <span />
        <span />
        <span />
        {text}
      </Link>
    </div>
  )
}

export default DemoButton
