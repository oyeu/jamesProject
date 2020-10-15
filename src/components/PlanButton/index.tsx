import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonWrapper = styled.div`
  text-align: center;
  width: 50%;
  background: #dcda15;
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 auto;
  border:solid;
  border-style:outset;
  border-color:#ca0603;
  border-width:5px;


  a {
    font-size: 50px;
    text-decoration: none;
    color: black;
    padding: 4px 8px;
    display: inline-block;
    width: 100%;
  }
`

const PlanButton = () => {
  return (
    <ButtonWrapper>
      <Link to="/planes">Ver planes</Link>
    </ButtonWrapper>
  )
}

export default PlanButton
