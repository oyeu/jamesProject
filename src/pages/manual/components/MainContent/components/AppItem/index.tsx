import React from "react"
import styled from "styled-components"
import RichText from "../../../../../../components/RichText"
import { Link } from "gatsby"

const ItemWrapper = styled.div`
  margin: 0 auto;
  width: 20%;
  background: #eee;

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
const Button = styled.div``

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
            <Link to={link}>Descargar</Link>
          </Button>
        </div>
      </div>
    </ItemWrapper>
  )
}

export default AppCard
