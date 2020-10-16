import React from "react"
import styled from "styled-components"
import { Link, graphql, StaticQuery } from "gatsby"

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

const HouseButtonWrapper = styled.div`
  position: fixed;
  top: 32vh;
  left: 0;
  z-index: 3;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border: solid;
  border-style: outset;
  border-width: 5px;
  border-color: #ca0603;

  :hover {
    border-color: #dcda15;
  }

  a {
    text-decoration: none;

    .text {
      color: #ca0603;
      background: #eee;
    }

    img {
      margin: 0;
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
          <HouseButtonWrapper>
            <Link to={`/${data._meta.uid}`}>
              <img src={data.button_image.url} alt="" />
              <div className="text">EL HOGAR EN SUS MANOS</div>
            </Link>
          </HouseButtonWrapper>
        )
      }}
    />
  )
}

export default HouseButton
