import React from "react"
import styled from "styled-components"
import { graphql, Link, StaticQuery } from "gatsby"
import RichText from "../../../RichText"

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
  top: 30vh;
  right: 0;
  z-index: 3;
  background: orange;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  width: 12rem;
  height: 5rem;
  font-weight: bold;
  border: solid;
  border-style: outset;
  border-width: 5px;

  :hover {
    background: #000f38;
    border-color: green;

    a {
      color: white;
    }
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

const PromotionButton = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        data = data.prismic.allPromotion_types.edges[0].node
        if (data.show_promotion) {
          return (
            <PromotionButtonWrapper>
              <Link to={`/${data._meta.uid}`}>
                <RichText render={data.promotion_subtitle} />
                ¡Enterate aquí!
              </Link>
            </PromotionButtonWrapper>
          )
        } else {
          return null
        }
      }}
    />
  )
}

export default PromotionButton
