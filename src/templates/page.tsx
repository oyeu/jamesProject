import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import { PagePropsWithPrismic } from "../@types/prismic"
import styled from "styled-components"
import PriceList from "../components/PlansPriceList"
import PlanPageContent from "../components/PlansPageContent"

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            background_image
            service_image_1
            service_image_2
            service_image_3
            page_title
            subtitle
            content
            _meta {
              uid
              id
            }
            body {
              ... on PRISMIC_PageBodyPricelist_ {
                type
                primary {
                  title
                }
                fields {
                  price
                  pricexxx
                  pricelist_title
                }
              }
            }
          }
        }
      }
    }
  }
`
const PageWrapper = styled.section`
  color: white;

  .pricelist-wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  > div:last-child {
    padding-bottom: 20px;
  }
`

const Page = (props: any) => {
  // console.log(props)

  const pageContent = props.data.prismic.allPages.edges[0].node
  return (
    <Layout>
      <PageWrapper>
        <PlanPageContent
          title={pageContent.page_title}
          subtitle={pageContent.subtitle}
          content={pageContent.content}
          image1={pageContent.service_image_1.url}
          image2={pageContent.service_image_2.url}
          image3={pageContent.service_image_3.url}
          backgroundImage={pageContent.background_image.url}
        />
        <div className="pricelist-wrapper">
          {pageContent.body?.map((pricelist: any, i: any) => {
            return (
              <PriceList
                key={i}
                title={pricelist.primary.title}
                priceItems={pricelist.fields}
              />
            )
          })}
        </div>

        <div>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value="2FL8YUDK5RTT8"/>
          <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
          <img alt="" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default Page
