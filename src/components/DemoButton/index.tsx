import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

const HeaderDemoButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 10px;

  button {
    margin: auto;
    background-color: #25d366;
    color: white;
    width: auto;
    height: 50%;
  }
`

const MainSlideDemoButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  margin: 10px;

  button {
    margin: auto;
    padding: 10px;
    background-color: #25d366;
    color: white;
    width: auto;
    height: 100%;
  }
`

const DemoButton = ({ type }: any) => {
  return (
    <>
      {type === "header" ? (
        <HeaderDemoButtonWrapper>
          <button
            onClick={() => {
              navigate("/demo-page")
            }}
          >
            ¡Solicita tu Demo gratis!
          </button>
        </HeaderDemoButtonWrapper>
      ) : null}

      {type === "main-slide" ? (
        <MainSlideDemoButtonWrapper>
          <button
            onClick={() => {
              navigate("/demo-page")
            }}
          >
            ¡Solicita tu Demo gratis!
          </button>
        </MainSlideDemoButtonWrapper>
      ) : null}
    </>
  )
}

export default DemoButton
