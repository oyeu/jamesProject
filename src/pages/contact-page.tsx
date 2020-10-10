import React from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import RichText from "../components/RichText"
import PageTitleSection from "../components/PageTitleSection"

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
const Button = styled.button`
  background: orange;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: none;
  border-radius: 4px;
`

const Form = styled.form`
  padding: 20px 20px;
  background: #eee;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  input {
    margin-bottom:10px;
    border-radius: 4px;
    height: 40px;
    border: 1px solid #eee;
    width: 100%;
  }

  textarea {
    margin-bottom:10px;
    border-radius: 4px;
    height: 100px;
    border: 1px solid #eee;
    width: 100%;
    resize: none;
`

const PageWrapper = styled.section`
  color: white;
  margin: 0 auto;
  max-width: 800px;
  height: auto;
  padding-bottom: 40px;

  .ws-bttn {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: auto;
    background: #eee;
    color: black;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;

    button {
      background: #25d366;
      width: 40%;
      border-radius: 10px;
      color: white;
      height: 40px;
    }
  }

  .form-description {
  }
`
const FormWrapper = styled.div`
  padding-bottom: 20px;

  form {
    border-radius: 10px;
  }
`

const ContactPage = (props: any) => {
  const pageContent = props.data.prismic.allContact_pages.edges[0].node
  return (
    <Layout>
      <PageTitleSection title={pageContent.form_title} />
      <PageWrapper>
        <div className="form-description">
          <RichText render={pageContent.form_description} />
        </div>
        <FormWrapper>
          <Form
            name="contact-us"
            method="POST"
            data-netlify="true"
            action="/contact-success"
          >
            <input type="hidden" name="form-name" value="contact-us" />
            {pageContent.form_fields?.map((field: any, i: any) => {
              if (field.field_type === "textArea") {
                return (
                  <div key={i}>
                    <textarea
                      name={field.field_name}
                      required={field.required === "yes"}
                      placeholder={field.field_name}
                    />
                  </div>
                )
              } else {
                return (
                  <div key={i}>
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
            <Button type="submit">Enviar</Button>
          </Form>
        </FormWrapper>
        <div className="ws-bttn">
          Tambien puedes enviarnos un mensaje por
          <button
            onClick={() => {
              navigate(pageContent.ws_link)
            }}
          >
            WhastApp
          </button>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default ContactPage
