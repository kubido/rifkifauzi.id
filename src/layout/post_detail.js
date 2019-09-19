import React from 'react'
import Layout from '../layout/main'
import { FacebookProvider, Comments } from 'react-facebook';
import SEO from "../components/seo"

export default ({data, location}) => {
  const post = data.markdownRemark

  return(
    
    <Layout>
      <SEO title={post.frontmatter.title}/>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <FacebookProvider appId="776869216027510">
        <Comments href={location.href} />
      </FacebookProvider>      
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