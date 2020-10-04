import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"
// import { PagePropsWithPrismic } from "../@types/prismic"
import styled from "styled-components"
import PriceList from "../components/PlansPriceList"

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
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
  max-width: 1200px;
  margin: 0 auto;
  color: white;

  .page_title {
    text-align: center;
  }

  > div:last-child {
    padding-bottom: 20px;
  }
`

const Page = (props: any) => {
  console.log(props)

  const pageContent = props.data.prismic.allPages.edges[0].node
  return (
    <Layout>
      <PageWrapper>
        <div className="page_title">
          <RichText render={pageContent.page_title} />
        </div>
        <div className="page_subtitle">
          <RichText render={pageContent.subtitle} />
        </div>
        <div className="plans_description">
          <RichText render={pageContent.content} />
        </div>
        <div>
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
