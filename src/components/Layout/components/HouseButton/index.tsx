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

const HouseButtonWrapper = styled.div<any>`
  max-width: 200px;
  position: fixed;
  bottom: 60vh;
  left: 0;
  z-index: 3;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  width: 9rem;
  height: 96px;
  font-weight: bold;
  border: solid;
  border-style: outset;
  border-width: 5px;
  background-image: url("${(props: any) => props.backgroundImage}");
  background-size: contain;
  background-repeat: no-repeat;

  .text {
    background: white;
    border: solid;
    border-color: #eee;
  }

  a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;

    p {
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
          <HouseButtonWrapper backgroundImage={data.button_image.url}>
            <Link to={`/${data._meta.uid}`} />
            <div className="text">EL HOGAR EN SUS MANOS</div>
          </HouseButtonWrapper>
        )
      }}
    />
  )
}

export default HouseButton
