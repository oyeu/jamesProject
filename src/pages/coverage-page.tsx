import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import RichText from "../components/RichText"
import Layout from "../components/Layout"

export const query = graphql`
  {
    prismic {
      allCoverage_pages {
        edges {
          node {
            title
            subtitle
            content
            contentImage
            body {
              ... on PRISMIC_Coverage_pageBodyImages_carrousel {
                primary {
                  slider_title
                }
                fields {
                  image_subtitle
                  image_title
                  slider_image
                }
              }
            }
          }
        }
      }
    }
  }
`

const CoveragePageWrapper = styled.section`
  color: white;

  .main {
    max-width: 1200px;
    margin: 0 auto;

    .title-section {
      text-align: center;
    }

    .content-section {
      display: flex;

      .content-img {
        display: flex;
        width: 50%;
        justify-content: center;

        img {
          width: 60%;
        }
      }

      .content-text {
        display: flex;
        flex-direction: column;
        width: 50%;
        font-size: 25px;
        justify-content: center;
        p {
          margin: 20 auto;
        }
      }
    }
  }
`

const CoveragePage = (props: any) => {
  console.log(props)
  const pageContent = props.data.prismic.allCoverage_pages.edges[0].node
  return (
    <Layout>
      <CoveragePageWrapper>
        <div className="main">
          <div className="title-section">
            <RichText render={pageContent.title} />
            <RichText render={pageContent.subtitle} />
          </div>
          <div className="content-section">
            <div className="content-text">
              <RichText render={pageContent.content} />
            </div>
            <div className="content-img">
              <img src={pageContent.contentImage.url} />
            </div>
          </div>
          <div className="slider-section" />
        </div>
      </CoveragePageWrapper>
    </Layout>
  )
}

export default CoveragePage
