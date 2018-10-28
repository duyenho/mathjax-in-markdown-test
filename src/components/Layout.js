import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import NavBar from "./NavBar"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background-color: mistyRose;
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  }
      render={data => (
      <Wrapper>
        <GlobalStyle />
        <NavBar />
        <h1>{data.site.siteMetadata.title}</h1>
        {children}
      </Wrapper>
    )}
  />
)
