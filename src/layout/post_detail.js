import React from 'react'
import Layout from '../layout/main'
import { FacebookProvider, Comments } from 'react-facebook';
import SEO from "../components/seo"
import { Link } from "gatsby"

export default ({data, location}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        thumbnail={post.frontmatter.thumbnail}
        description={post.frontmatter.desc}
      />
      <div className="post-info">
        <div className="tags">
          {post.frontmatter.tags.map(tag => {
            return (
              <Link to={`/tags/${tag}/`}>
                <span className="label-tag">{tag}</span>
              </Link>
            );
          })}
        </div>
        <span className="date">{post.frontmatter.date}</span>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <FacebookProvider appId="776869216027510">
        <Comments href={location.href} />
      </FacebookProvider>
    </Layout>
  );
  
}

export const query = graphql`
  query ContentBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        thumbnail
        date(formatString: "DD MMM YYYY")
        tags
      }
      fields {
        slug
      }
    }
  }
    
`