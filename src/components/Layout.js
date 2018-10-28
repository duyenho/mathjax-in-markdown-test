import React from "react"
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
  <Wrapper>
    <GlobalStyle />
    <NavBar />
    {children}
  </Wrapper>
)
