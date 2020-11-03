import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import RichText from "../../../RichText"
import "./index.css"

const query = graphql`
  {
    prismic {
      allPromotion_types {
        edges {
          node {
            promotion_button_text
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
                <RichText render={data.promotion_button_text} />
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
