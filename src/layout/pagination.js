import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../layout/main"
import '../components/layout.css'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span style={{ color: '#eee' }}>{props.text}</span>
  }
}

export default ({ data, pageContext }) => {
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? '/' : 'page/' + (index - 1).toString()
  const nextUrl = 'page/' + (index + 1).toString()
  return (
    <>
      <SEO />
      <Layout>
        <ul>
          {group.map((post, index) => (
            <li className="post-item" key={index}>
              <span className="meta"> {post.node.frontmatter.date}</span>
              <Link to={post.node.fields.slug}> {post.node.frontmatter.title} </Link>
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
          <NavLink test={first} url={previousUrl} text="<< Sebelumnya" />
          <p style={{ color: '#aaa' }}>hal {index}</p>
          <NavLink test={last} url={nextUrl} text="Berikutnya >>" />
        </div>
      </Layout>

    </>
  );
}

