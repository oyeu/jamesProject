import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import "./index.css"

const query = graphql`
  {
    prismic {
      allCasa_autonomas {
        edges {
          node {
            button_image
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`

const HouseButton = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        data = data.prismic.allCasa_autonomas.edges[0].node
        return (
          <div className="house-button-wrapper">
            <Link to={`/${data._meta.uid}`}>
              <span />
              <span />
              <span />
              <span />
              <img src={data.button_image.url} alt="" />
              <div className="text">EL HOGAR EN SUS MANOS</div>
            </Link>
          </div>
        )
      }}
    />
  )
}

export default HouseButton
