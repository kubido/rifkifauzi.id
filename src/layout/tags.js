import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../layout/main"
import '../components/layout.css'

export default ({ data, slug }) => {
  const {allMarkdownRemark: edges} = data
  return(
    <>
      <SEO title={slug}/>
      <Layout>
        <ul>
          { edges.nodes.map( (post, index) => (
            <li className="post-item" key={index}>
              <span className="meta"> { post.frontmatter.date }</span>
              <Link to={post.fields.slug}> {post.frontmatter.title} </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

export const query = graphql`

  query ContentByTag($tag: [String!]){
    allMarkdownRemark(
      sort: {
        order: DESC, fields: frontmatter___date
      },
      filter: {
        frontmatter: {
          draft: {eq: false},
          tags: {in: $tag }
        }
      }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMM Do")
          title
          tags
          draft
        }
      }
    }
  }
`