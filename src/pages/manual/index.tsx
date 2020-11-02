import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import MainContent from "./components/MainContent"
import QuestionList from "./components/QuestionList"
import PageTitleSection from "../../components/PageTitleSection"
import "./index.css"

export const query = graphql`
  {
    prismic {
      allManual_pages {
        edges {
          node {
            faq {
              answer
              question
            }
            iptvapps {
              app_link {
                ... on PRISMIC__ExternalLink {
                  url
                }
              }
              logo
              name
              targetdevice
            }
            page_title
            questions_title
            content
          }
        }
      }
    }
  }
`

const ManualPage = (props: any) => {
  const pageContent = props.data.prismic.allManual_pages.edges[0].node

  return (
    <Layout>
      <PageTitleSection title={pageContent.page_title} />
      <div className="manual-page-wrapper">
        <MainContent
          mainText={pageContent.content}
          iptvApps={pageContent.iptvapps}
        />
        <QuestionList
          title={pageContent.questions_title}
          questions={pageContent.faq}
        />
      </div>
    </Layout>
  )
}

export default ManualPage
