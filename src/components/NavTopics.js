import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"

const NavWrapper = styled.nav`
  width: 30%;
`

const groupBy = (filesArray, property) => {
  return filesArray.reduce((acc, obj) => {
    const key = obj.node.frontmatter[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const makePageLinks = (files) => files.map((file, i) => {
  return (
    <li key={i}>
      <Link to={file.node.fields.slug}>
        {file.node.frontmatter.title}
      </Link>
    </li>
  )
})

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
                order
                group
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  }
      render={data => {
        const allFiles = data.allMarkdownRemark.edges;
        const groupedFiles = groupBy(allFiles, 'group');
        const sectionNames = Object.keys(groupedFiles);

        return (
          <NavWrapper>
            {sectionNames.map((group, i) => {
              const files = groupedFiles[group];
              return (
                <div key={i}>
                  <h3>{group}</h3>
                  <ul>
                    {makePageLinks(files)}
                  </ul>
                </div>
              )
            })}
          </NavWrapper>
        )}
      } 
  />
)
