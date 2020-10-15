import React from "react"
import styled from "styled-components"
import RichText from "../components/RichText"
import { graphql, navigate } from "gatsby"
import Layout from "../components/Layout"
import PageTitleSection from "../components/PageTitleSection"

export const query = graphql`
  {
    prismic {
      allDems {
        edges {
          node {
            background_image
            title
            content
            button_links {
              button_label
              button_link {
                ... on PRISMIC_Contact_page {
                  _meta {
                    uid
                  }
                }
                ... on PRISMIC__ExternalLink {
                  url
                }
                _linkType
              }
            }
          }
        }
      }
    }
  }
`

const DemoPageWrapper = styled.section<any>`
  color: white;
  text-align: center;
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

  .content {
    padding: 100px;
    margin: auto;
    max-width: 1200px;
    position: relative;
    z-index: 2;

    .buttons-container {
      display: flex;

      button {
        color: black;
        background-color: #dcda15;
        margin: 0 auto;
        width: 40%;
        height: 100px;
        border: solid;
        border-style: outset;
        border-width: 5px;
        border-color: #ca0603;
        font-weight:bold;

        :hover {
          background: #ca0603;
          border-color: #dcda15;
          color:white;
        }
      }
    }
  }
`

const DemoPage = (props: any) => {
  const pageContent = props.data.prismic.allDems.edges[0].node
  return (
    <Layout>
      <PageTitleSection title={pageContent.title} />
      <DemoPageWrapper backgroundImage={pageContent.background_image.url}>
        <div className="content">
          <RichText render={pageContent.content} />

          <div className="buttons-container">
            {pageContent.button_links.map((button: any, i: any) => {
              if (button.button_link._linkType === "Link.web") {
                return (
                  <button
                    key={i}
                    className="ws-button"
                    onClick={() => {
                      navigate(`${button.button_link.url}`)
                    }}
                  >
                    {button.button_label}
                  </button>
                )
              } else {
                return (
                  <button
                    key={i}
                    className="form-button"
                    onClick={() => {
                      navigate(`/${button.button_link._meta.uid}`)
                    }}
                  >
                    {button.button_label}
                  </button>
                )
              }
            })}
          </div>
        </div>
      </DemoPageWrapper>
    </Layout>
  )
}

export default DemoPage
