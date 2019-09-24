import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../layout/main"
import '../components/layout.css'

export default ({ data }) => {
  const {allMarkdownRemark: edges} = data

  return (
    <>
      <Layout>
        <SEO />
        <ul>
          {edges.nodes.map((post, index) => (
            <li className="post-item" key={index}>
              <span className="meta"> {post.frontmatter.date}</span>
              <Link to={post.fields.slug}> {post.frontmatter.title} </Link>
            </li>
          ))}
        </ul>
        <div id="pagination" style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '2em',
          marginTop: '3em',
          alignItems: 'center'
        }}>
          <span style={{ color: '#eee'}}> {"<<"} Sebelumnya </span>
          <p style={{ color: '#aaa'}}>hal 1</p>
          <Link to='/page/2'>Berikutnya >></Link>
        </div>      

      </Layout>
    </>
  );
}

export const query = graphql`
  query{
  
    allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {frontmatter: {draft: {eq: false}}}
      limit: 8
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMM YYYY")
          title
          tags
          draft
        }
      }
    }
  }
`