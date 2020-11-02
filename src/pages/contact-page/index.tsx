import React from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../../components/Layout"
import RichText from "../../components/RichText"
import PageTitleSection from "../../components/PageTitleSection"
import "./index.css"

export const query = graphql`
  {
    prismic {
      allContact_pages {
        edges {
          node {
            ws_link
            form_description
            form_title
            form_fields {
              field_name
              field_type
              required
            }
          }
        }
      }
    }
  }
`

const ContactPage = (props: any) => {
  const pageContent = props.data.prismic.allContact_pages.edges[0].node
  return (
    <Layout>
      <PageTitleSection title={pageContent.form_title} />
      <section className="contact-page-wrapper">
        <RichText render={pageContent.form_description} />
        <div className="ws-area">
          o tambien puedes contactarnos por
          <button
            onClick={() => {
              navigate(pageContent.ws_link)
            }}
          >
            WhatsApp
          </button>
        </div>
        <div className="form-wrapper">
          <form
            name="contact-us"
            method="POST"
            data-netlify="true"
            action="/contact-success"
          >
            <input type="hidden" name="form-name" value="contact-us" />
            {pageContent.form_fields?.map((field: any) => {
              if (field.field_type === "textArea") {
                return (
                  <div key={field.field_name}>
                    <textarea
                      name={field.field_name}
                      required={field.required === "yes"}
                      placeholder={field.field_name}
                    />
                  </div>
                )
              } else {
                return (
                  <div key={field.field_name}>
                    <input
                      name={field.field_name}
                      required={field.required === "yes"}
                      placeholder={field.field_name}
                      type={field.field_type}
                    />
                  </div>
                )
              }
            })}
            <button className="contact-form-submit" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
