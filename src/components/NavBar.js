import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  margin-right: 10px;
  display: inline-block;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: blue;
  }
`

export default () => (
  <nav>
    <StyledLink to={`/`}>Home</StyledLink>
    <StyledLink to={`/about/`}>About</StyledLink>
  </nav>
)
