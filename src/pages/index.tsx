import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SliceZone from "../components/sliceZone"

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyMainslice {
                type
                label
                primary {
                  home_main_slice_content
                  home_main_slice_title
                  main_slide_image
                }
              }
              ... on PRISMIC_HomepageBodyCall_to_action_grid {
                type
                fields {
                  button_destination {
                    ... on PRISMIC_Page {
                      page_title
                      _meta {
                        uid
                      }
                    }
                  }
                  button_label
                  call_to_action_title
                  featured_image
                  content
                }
                primary {
                  section_title
                }
              }
              ... on PRISMIC_HomepageBodyPricelist_ {
                type
                primary {
                  title
                }
                fields {
                  price_type
                  pricelist_description
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

const IndexPage = (props: any) => {
  // console.log(props)

  return (
    <Layout>
      <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} />
    </Layout>
  )
}

export default IndexPage