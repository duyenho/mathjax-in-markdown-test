import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => (
  <Layout>
    <p>{data.site.siteMetadata.title} is an experiment to render markdown files with embedded maths equations in a React app.</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`