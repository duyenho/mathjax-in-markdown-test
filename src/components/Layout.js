import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet";
import NavBar from "./NavBar"
import NavTopics from "./NavTopics"
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background-color: mistyRose;
`

const MainWrapper = styled.main`
  display: flex;
`

const Main = styled.main`
  width: 70%;
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
      <LayoutWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Test ja</title>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
        </Helmet>
        <GlobalStyle />
        <header>
          <NavBar />
        </header>
        <MainWrapper>
          <NavTopics />
          <Main>
            <h1>{data.site.siteMetadata.title}</h1>
            {children}
          </Main>
        </MainWrapper>
      </LayoutWrapper>
    )}
  />
)
