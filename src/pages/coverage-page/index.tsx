import React from "react"
import { graphql } from "gatsby"
import RichText from "../../components/RichText"
import Layout from "../../components/Layout"
import { Carousel } from "react-bootstrap"
import PlanButton from "../../components/PlanButton"
import PageTitleSection from "../../components/PageTitleSection"
import "./index.css"

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

const CoveragePage = (props: any) => {
  const pageContent = props.data.prismic.allCoverage_pages.edges[0].node

  return (
    <Layout>
      <PageTitleSection title={pageContent.title} />
      <section className="coverage-page-wrapper">
        <div className="coverage-info-desktop">
          <div className="title-section">
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
        </div>
        <div className="coverage-info-mobile">
          <div className="title-section">
            <RichText render={pageContent.subtitle} />
          </div>
          <div className="content-section">
            <div className="first-content-text">
              <RichText render={pageContent.content.slice(0, 1)} />
            </div>
            <div className="content-img">
              <img src={pageContent.contentImage.url} />
            </div>
            <div className="second-content-text">
              <RichText render={pageContent.content.slice(1)} />
            </div>
          </div>
        </div>
        <div className="slider-section">
          <RichText render={pageContent.body[0].primary.slider_title} />
          <Carousel pause={false}>
            {pageContent.body[0].fields.map((slide: any, i: any) => {
              return (
                <Carousel.Item key={i}>
                  <img src={slide.slider_image.url} alt="" />
                </Carousel.Item>
              )
            })}
          </Carousel>
        </div>
        <div className="plan-button-section">
          <PlanButton />
        </div>
      </section>
    </Layout>
  )
}

export default CoveragePage
