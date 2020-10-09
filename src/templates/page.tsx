import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import PriceList from "../components/PlansPriceList"
import PlanPageContent from "../components/PlansPageContent"
import PageTitleSection from "../components/PageTitleSection"

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
        <PageTitleSection title={pageContent.page_title} />
        <PlanPageContent
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
      </PageWrapper>
    </Layout>
  )
}

export default Page
