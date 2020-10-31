import React from "react"
import { navigate } from "gatsby"
import "./index.css"

const DemoButton = ({ type }: any) => {
  return (
    <>
      {type === "header" ? (
        <section className="header-button-section">
          <button
            className="demo-button header-demo-button"
            onClick={() => {
              navigate("/demo-page")
            }}
          >
            ¡Solicita tu Demo gratis!
          </button>
        </section>
      ) : null}

      {type === "main-slide" ? (
        <section className="header-button-section">
          <button
            className="demo-button slide"
            onClick={() => {
              navigate("/demo-page")
            }}
          >
            ¡Solicita tu Demo gratis!
          </button>
        </section>
      ) : null}
    </>
  )
}

export default DemoButton
