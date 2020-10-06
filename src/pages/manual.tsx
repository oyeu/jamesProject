import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import RichText from "../components/RichText"

const Inicio = styled.div`
  color: white;
`

const ManualPage = (props: any) => {
  return (
    <Layout>
      <Inicio>Manual de usuario</Inicio>
    </Layout>
  )
}

export default ManualPage
