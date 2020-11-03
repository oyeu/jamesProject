import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import RichText from "../../components/RichText"
import PageTitleSection from "../../components/PageTitleSection"
import "./index.css"

export const query = graphql`
  {
    prismic {
      allCasa_autonomas {
        edges {
          node {
            background_image
            content
            subtitle
            title
          }
        }
      }
    }
  }
`

const PageWrapper = styled.section<any>`
  ::after {
    content: " ";
    display: block;
    position: fixed;
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

  .house-content {
    .contact-section {
      display: flex;
      margin: auto;
      padding-bottom: 80px;
      align-items: center;
      justify-content: center;

      div {
        width: 100%;
      }

      .contact-text {
        p {
          margin: 0;
        }
      }

      .contact-button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .section {
      display: flex;

      div {
        width: 100%;
        margin: auto;
      }

      .section-one-image {
        div {
          margin: 0 10px;
          background: white;
          padding: 10px;
          border-radius: 10px;
          margin-left: auto;
          display: flex;
          align-self: center;
          width: fit-content;

          img {
            margin: 0;
          }
        }
      }

      .section-two-images {
        div {
          display: flex;

          div {
            margin: 0 10px;
            background: white;
            padding: 10px;
            border-radius: 10px;
            display: flex;
            align-self: center;
            width: fit-content;

            img {
              margin: 0;
            }
          }
        }

        .image-two {
          justify-content: flex-end;
        }
      }
    }
  }
`

const CasaAutonomaPage = (props: any) => {
  const pageContent = props.data.prismic.allCasa_autonomas.edges[0].node
  return (
    <Layout>
      <PageTitleSection title={pageContent.title} />
      <PageWrapper
        className="casa-page-wrapper"
        backgroundImage={pageContent.background_image.url}
      >
        <div className="house-content">
          <div className="section">
            <div className="section-text">
              <div>
                <RichText render={pageContent.subtitle} />
                <RichText render={[pageContent.content[0]]} />
              </div>
            </div>
            <div className="section-one-image">
              <div>
                <img src={pageContent.background_image.url} />
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-two-images">
              <div className="image-one ">
                <div>
                  <img src={pageContent.content[3].url} />
                </div>
              </div>
              <div className="image-two">
                <div>
                  <img src={pageContent.content[4].url} />
                </div>
              </div>
            </div>
            <div className="section-text">
              <div>
                <RichText render={[pageContent.content[1]]} />
                <RichText render={[pageContent.content[2]]} />
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-text">
              <div>
                <RichText render={[pageContent.content[5]]} />
                <RichText render={[pageContent.content[6]]} />
              </div>
            </div>
            <div className="section-two-images">
              <div className="image-one ">
                <div>
                  <img src={pageContent.content[8].url} />
                </div>
              </div>
              <div className="image-two">
                <div>
                  <img src={pageContent.content[7].url} />
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section-one-image">
              <div>
                <img src={pageContent.content[15].url} />
              </div>
            </div>
            <div className="section-text">
              <div>
                <RichText render={[pageContent.content[9]]} />
                <RichText render={pageContent.content.slice(10, 15)} />
              </div>
            </div>
          </div>

          <div className="contact-section">
            <div className="contact-text">
              <RichText render={[pageContent.content[19]]} />
            </div>
            <div className="contact-button">
              <div className="btn-wrapper">
                <Link to={"/contact-page"}>¡Empezemos!</Link>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default CasaAutonomaPage
