import React from "react"
import styled from "styled-components"
import RichText from "../../../../../../components/RichText"
import { Link } from "gatsby"

const ItemWrapper = styled.div`
  margin: 0 auto;
  width: 20%;
  background: #eee;
  border-radius: 10px;
  border: solid;
  border-style: inset;
  border-color: #dcda15;

  :hover {
    border-color: #ca0603;
  }

  .img-holder {
    display: flex;
    justify-content: center;
  }

  .card-info {
    color: black;

    h2 {
      font-size: 20px;
    }

    .app-name {
      border-top: solid;
      border-bottom: solid;
      border-color: #000f38;
      text-align: center;
    }

    .app-content {
      padding: 20px;
    }
  }
`
const Button = styled.div`
  width: 80%;
  border: solid;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  border-color: #ca0603;

  a {
    color: #000f38;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`

const AppCard = ({ link, logo, name, targetDevice }: any) => {
  return (
    <ItemWrapper>
      <div className="img-holder">
        <img src={logo} alt="" />
      </div>
      <div className="card-info">
        <div className="app-name">
          <RichText render={name} />
        </div>
        <div className="app-content">
          <RichText render={targetDevice} />
          <Button>
            <a href={link} target="blank">
              Descargar
            </a>
          </Button>
        </div>
      </div>
    </ItemWrapper>
  )
}

export default AppCard
