import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
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
  padding: 10px;
  background: #eee;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const ContactPage = (props: any) => {
  console.log(props)
  return (
    <Layout>
      <RichText
        render={
          props.data.prismic.allContact_pages.edges[0].node.form_description
        }
      />
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
                    required={field.required === "yes"}
                    placeholder={field.field_name}
                  />
                </div>
              )
            } else {
              return (
                <div key={i}>
                  <input
                    required={field.required === "yes"}
                    placeholder={field.field_name}
                    type={field.field_type}
                  />
                </div>
              )
            }
          }
        )}
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
  )
}

export default ContactPage
