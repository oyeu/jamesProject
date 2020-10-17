import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import RichText from "../../components/RichText"
import PageTitleSection from "../../components/PageTitleSection"
import Layout from "../../components/Layout"
import ContactButton from "../../components/ContactButton"

export const query = graphql`
  {
    prismic {
      allPromotion_types(where: {}) {
        edges {
          node {
            promotion_subtitle
            promotion_text
            promotion_title
            show_promotion
            promotion_plan {
              old_normal_price
              promotion_price
              plan_description
              button_code
            }
          }
        }
      }
    }
  }
`

const PromotionPageWrapper = styled.section`
  color: white;

  .promotion-grid {
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;

    .promotion-subtitle {
      font-size: 30px;
      font-weight: bold;
    }

    .plan-card {
      padding-bottom: 20px;
      background: #eee;
      color: black;
      border-radius: 10px;

      .pp-button {
        padding-top: 20px;
        border: solid;
        border-width: 2px;
        border-style: groove;
        max-width: 30%;
        margin: 0 auto;
      }

      .plan-description {
        padding-top: 20px;
      }

      .plan-price {
        .old-price {
          text-decoration: line-through;

          span {
            color: red;
          }
        }

        .new-price {
          span {
            color: green;
          }
        }
      }
    }
  }
`

const PromotionPage = (props: any) => {
  const pageContent = props.data.prismic.allPromotion_types.edges[0].node
  const promotionPlan = pageContent.promotion_plan[0]

  return (
    <Layout>
      <PageTitleSection title={pageContent.promotion_title} />
      <PromotionPageWrapper>
        <div className="promotion-grid">
          <div className="promotion-subtitle">
            <RichText render={pageContent.promotion_subtitle} />
          </div>
          <div className="promotion-text">
            <RichText render={pageContent.promotion_text} />
          </div>
          <div className="plan-card">
            <div className="plan-description">
              <RichText render={promotionPlan.plan_description} />
            </div>
            <div className="plan-price">
              <div className="old-price">
                <span>Antes</span> {promotionPlan.old_normal_price}$ con canales
                para adultos
              </div>
              <div className="new-price">
                <span>Ahora</span> {promotionPlan.promotion_price}$ con canales
                para adultos
              </div>
            </div>
            <div className="pp-button">
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value={promotionPlan.button_code}
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif"
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                />
                <img
                  alt=""
                  src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
          </div>
          <ContactButton />
        </div>
      </PromotionPageWrapper>
    </Layout>
  )
}

export default PromotionPage
