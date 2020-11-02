import React from "react"
import RichText from "../../../../../../components/RichText"
import "./index.css"

const AppCard = ({ link, logo, name, targetDevice }: any) => {
  return (
    <div className="item-wrapper">
      <div className="img-holder">
        <img src={logo} alt="" />
      </div>
      <div className="card-info">
        <div className="app-name">
          <RichText render={name} />
        </div>
        <div className="app-content">
          <RichText render={targetDevice} />
          <div className="app-button">
            <a href={link} target="blank">
              Descargar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppCard
