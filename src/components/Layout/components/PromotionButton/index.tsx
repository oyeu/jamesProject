import React from "react"
import styled from "styled-components"
import { graphql, Link, StaticQuery } from "gatsby"
import RichText from "../../../RichText"
import "./index.css"

const query = graphql`
  {
    prismic {
      allPromotion_types {
        edges {
          node {
            promotion_subtitle
            show_promotion
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`

const PromotionButtonWrapper = styled.div`
  position: fixed;
  top: 32vh;
  right: 0;
  z-index: 3;
  background: #ca0603;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  width: 12rem;
  height: 5rem;
  font-weight: bold;
  border: solid;
  border-style: outset;
  border-width: 5px;
  border-color: #dcda15;

  :hover {
    background: #dcda15;
    border-color: #ca0603;

    a {
      color: black;
    }
  }

  a {
    text-decoration: none;
    color: white;
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

const PromotionButton = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        data = data.prismic.allPromotion_types.edges[0].node
        if (data.show_promotion) {
          return (
            <div className="promotion-button-wrapper">
              <Link to={`/${data._meta.uid}`}>
                <RichText render={data.promotion_subtitle} />
                ¡Enterate aquí!
              </Link>
            </div>
          )
        } else {
          return null
        }
      }}
    />
  )
}

export default PromotionButton
