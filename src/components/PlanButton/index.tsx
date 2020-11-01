import React from "react"
import { Link } from "gatsby"
import "./index.css"

const PlanButton = () => {
  return (
    <div className="mobile-plan-button">
      <Link to="/planes">
        <span />
        <span />
        <span />
        <span />
        Ver planes
      </Link>
    </div>
  )
}

export default PlanButton
