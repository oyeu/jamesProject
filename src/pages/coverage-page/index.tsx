import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import RichText from "../../components/RichText"
import Layout from "../../components/Layout"
import { Carousel } from "react-bootstrap"
import PlanButton from "../../components/PlanButton"
import PageTitleSection from "../../components/PageTitleSection"

export const query = graphql`
  {
    prismic {
      allCoverage_pages {
        edges {
          node {
            title
            subtitle
            content
            background_image
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

const CoveragePageWrapper = styled.section<any>`
  color: white;
  padding-bottom: 40px;

  .slider-section {
    text-align: center;
    padding-top: 40px;
    max-width: 1200px;
    margin: 0 auto;

    .carousel-control-next {
      justify-content: flex-end;
    }

    .carousel-control-prev {
      justify-content: flex-start;
    }

    .carousel-control-next-icon {
      background-color: #000f38;
      width: 30%;
      height: 15%;
    }
    .carousel-control-prev-icon {
      background-color: #000f38;
      width: 30%;
      height: 15%;
    }
  }

  .plan-button-section {
    display: flex;
    justify-content: center;
  }

  .background {
    position: relative;
    background: #000f38;
    overflow: hidden;

    ::after {
      content: " ";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0.05;
      background-image: url("${(props: any) => props.backgroundImage}");
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: cover;
    }

    .main {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      margin: 0 auto;

      .title-section {
        text-align: center;
      }

      .content-section {
        display: flex;
        justify-content: center;

        .content-img {
          display: flex;
          width: 600px;
          height: 600px;

          img {
          }
        }

        .content-text {
          display: flex;
          flex-direction: column;
          width: 50%;
          font-size: 20px;
          p {
            margin: 20 auto;
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
      <CoveragePageWrapper backgroundImage={pageContent.background_image.url}>
        <div className="background">
          <div className="main">
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
      </CoveragePageWrapper>
    </Layout>
  )
}

export default CoveragePage
