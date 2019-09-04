import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import '../components/layout.css'

export default ({ data }) => {
  const {allMarkdownRemark: edges} = data
  return(
    <>
      <SEO title="Home" />
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-4 pure-u-xl-1-3 "></div>
        <div className="pure-u-1 pure-u-md-1-2 pure-u-xl-1-3 ">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>
            <ul>
              { edges.nodes.map( (post, index) => (
                  <li key={index}>
                    { post.frontmatter.title }
                  </li>
                
              ))}
            </ul>
          </main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
        <div className="pure-u-1 pure-u-md-1-4 pure-u-xl-1-3 "></div>
      </div>
    </>
    
  )
}

export const query = graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
    
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {draft: {eq: false}}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
          title
          tags
          draft
        }
      }
    }
  }
`