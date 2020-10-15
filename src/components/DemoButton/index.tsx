import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

const HeaderDemoButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 10px;

  button {
    margin: auto;
    background-color: #dcda15;
    color:black;
    width: auto;
    height: 50%;
    font-weight:bold;
    border: solid;
    border-style: outset;
    border-width: 5px;
    border-color: #ca0603;

    :hover {
      background: #ca0603;
      border-color: #dcda15;
      color:white;
    }
  }
`

const MainSlideDemoButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  margin: 10px;

  button {
    margin: auto;
    padding: 10px;
    background-color: #dcda15;
    color: black;
    width: auto;
    height: 100%;
    font-weight:bold;
    border: solid;
    border-style: outset;
    border-width: 5px;
    border-color: #ca0603;

    :hover {
      background: #ca0603;
      border-color: #dcda15;
      color:white;
  }
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
