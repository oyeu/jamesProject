import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import PriceList from "./components/PlansPriceList"
import PlanPageContent from "./components/PlansPageContent"
import PageTitleSection from "../../components/PageTitleSection"
import "./index.css"

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allContact_pages {
        edges {
          node {
            ws_link
          }
        }
      }
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
                  normal_button_code
                  xxx_button_code
                }
              }
            }
          }
        }
      }
    }
  }
`

const Page = (props: any) => {
  // console.log(props)
  const pageContent = props.data.prismic.allPages.edges[0].node
  return (
    <Layout>
      <PageTitleSection title={pageContent.page_title} />
      <section className="plan-page-wrapper">
        <PlanPageContent
          subtitle={pageContent.subtitle}
          content={pageContent.content}
          image1={pageContent.service_image_1.url}
          image2={pageContent.service_image_2.url}
          image3={pageContent.service_image_3.url}
          backgroundImage={pageContent.background_image.url}
          ws_link={props.data.prismic.allContact_pages.edges[0].node.ws_link}
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
      </section>
    </Layout>
  )
}

export default Page
