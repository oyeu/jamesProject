import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import RichText from "../components/RichText"

export const query = graphql`
  {
    prismic {
      allContact_pages {
        edges {
          node {
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
  height: 100vh;

  .form-title {
    text-align: center;
  }

  .form-description {
  }
`
const FormWrapper = styled.div`
  padding-bottom: 20px;
`

const ContactPage = (props: any) => {
  console.log(props)
  return (
    <Layout>
      <PageWrapper>
        <div className="form-title">
          <RichText
            render={
              props.data.prismic.allContact_pages.edges[0].node.form_title
            }
          />
        </div>
        <div className="form-description">
          <RichText
            render={
              props.data.prismic.allContact_pages.edges[0].node.form_description
            }
          />
        </div>
        <FormWrapper>
          <Form
            name="contact-us"
            method="POST"
            data-netlify="true"
            action="/contact-success"
          >
            <input type="hidden" name="form-name" value="contact-us" />
            {props.data.prismic.allContact_pages.edges[0].node.form_fields.map(
              (field: any, i: any) => {
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
              }
            )}
            <Button type="submit">Enviar</Button>
          </Form>
        </FormWrapper>
      </PageWrapper>
    </Layout>
  )
}

export default ContactPage
