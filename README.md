# MathJax in Markdown Test

## Problem
What is the best way to render markdown files with maths equations in a React app?

## Toolkit
- [Gatsby](https://www.gatsbyjs.org/)
- [GraphQL](https://graphql.org/) via Gatsby's data layer
- [MathJax](https://www.mathjax.org/)
- [react-mathjax2](https://github.com/wko27/react-mathjax)

## Notes
2018-10-28
- `gatsby-transformer-remark` parses the `.md` files and sends the frontmatter fields to GraphQL fields so they can be queried
- `gatsby-source-filesystem` reads the file names and the helpers `onCreateNode` and `createPages` make dynamic routing and page creation easy
- `.md` files contain math equations wrapped in `p` tags and are to be formatted with MathJax at run time
- As a test, the MathJax script was added to the document head via `react-helmet` and will only format the equations on hard refresh > somewhat expected
- The limitation of `gatsby-transformer-remark` is that it parses the markdown as one html string
- Currently the string is being rendered via `dangerouslySetInnerHTML` which I'm told is bad practice, even though everyone does it :P
- A solution is to split the `html` string into an array of tags, account for the enter keys, add class hooks to the maths equations render them via `react-mathjax2` .. _or_ write a new parser

### Getting Started
1. Clone the repo
2. Run `npm install`
3. Run `gatsby develop`
