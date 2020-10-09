import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import RichText from "../RichText"

const promotionQuery = graphql`
  {
    prismic {
      allPromotion_types {
        edges {
          node {
            button_direction {
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
            }
            promotion_content
            promotion_image
            promotion_title
            promotion_subtitle
            button_label
            show_promotion
          }
        }
      }
    }
  }
`

const PromotionSliceWrapper = styled.section<any>`
  background: url("${(props: any) => props.backgroundImage}");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
  display: flex;

  .promotion-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    color: black;

    .promotion-slice-button {
      padding: 20px;
      margin: auto;
      border: solid;
      border-radius: 5px;
      border-color: black;
      cursor: pointer;
      display: inline-block;
      background: rgba(0, 0, 0, 0.2);

      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: black;
      }
    }

    .promotion-slice-content {
      margin: 0 auto;
      font-size: 25px;

      .promotion-slice-title {
        text-align: center;
      }

      .promotion-slice-text {
        margin-right: 40px;
      }
    }
  }
`

const PromotionSlice = () => {
  return (
    <StaticQuery
      query={promotionQuery}
      render={data => {
        const promotionData = data.prismic.allPromotion_types.edges[0].node
        if (promotionData.show_promotion) {
          return (
            <PromotionSliceWrapper
              backgroundImage={promotionData.promotion_image.url}
            >
              <div className="promotion-grid">
                <div className="promotion-slice-content">
                  <div className="promotion-slice-title">
                    <RichText render={promotionData.promotion_subtitle} />
                  </div>
                  <div className="promotion-slice-text">
                    <RichText render={promotionData.promotion_content} />
                  </div>
                </div>
                <div className="promotion-slice-button">
                  <Link to={`/${promotionData.button_direction._meta.uid}`}>
                    {promotionData.button_label}
                  </Link>
                </div>
              </div>
            </PromotionSliceWrapper>
          )
        } else {
          return null
        }
      }}
    />
  )
}

export default PromotionSlice
