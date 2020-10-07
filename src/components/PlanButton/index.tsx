import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonWrapper = styled.div`
  text-align: center;
  width: 50%;
  background: #25d366;
  display: inline-block;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin: 0 auto;

  a {
    font-size: 50px;
    color: white;
    text-decoration: none;
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
