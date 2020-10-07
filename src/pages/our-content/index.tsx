import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import RichText from "../../components/RichText"
import Layout from "../../components/Layout"
import { Carousel } from "react-bootstrap"
import PlanButton from "../../components/PlanButton"
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

const OurContentWrapper = styled.section<any>`
  color: white;
  padding: 40px;

  .slider-section {
    text-align: center;
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
const ContentPage = (props: any) => {
  const pageContent = props.data.prismic.allOur_contents.edges[0].node
  return (
    <Layout>
      <OurContentWrapper backgroundImage={pageContent.background_image.url}>
        <div className="background">
          <div className="main">
            <div className="title-section">
              <RichText render={pageContent.title} />
              <RichText render={pageContent.subtitle} />
            </div>
            <div className="content-section">
              <div className="content-text">
                <RichText render={pageContent.content} />
              </div>
            </div>
          </div>
        </div>
        <div className="slider-section">
          <RichText render={pageContent.body[0].primary.slider_title} />
          <Carousel>
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
      </OurContentWrapper>
    </Layout>
  )
}

export default ContentPage