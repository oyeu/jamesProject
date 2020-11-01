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
      allOur_contents {
        edges {
          node {
            background_image
            body {
              ... on PRISMIC_Our_contentBodyImages_carrousel {
                fields {
                  slider_image
                  image_title
                  image_subtitle
                }
                primary {
                  slider_title
                }
              }
            }
            content
            subtitle
            title
          }
        }
      }
    }
  }
`

const ContentPage = (props: any) => {
  const pageContent = props.data.prismic.allOur_contents.edges[0].node
  return (
    <Layout>
      <PageTitleSection title={pageContent.title} />
      <section className="our-content-wrapper">
        <div className="main">
          <div className="title-section">
            <RichText render={pageContent.subtitle} />
          </div>
          <div className="content-section">
            <div className="content-text">
              <RichText render={pageContent.content} />
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

export default ContentPage
