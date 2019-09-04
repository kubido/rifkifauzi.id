import React from 'react'
import Layout from '../layout/main'

export default ({data}) => {
  const post = data.markdownRemark
  return(
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
  
}

export const query = graphql`
  query ContentBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
    
`