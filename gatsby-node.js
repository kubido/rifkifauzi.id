
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.createPages = async function({ actions, graphql }) {
  const {data} = await graphql(`
    query{
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
              draft
              tags
            }
          }
        }
      }
    }
  `)

  
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    
    actions.createPage({
      path: slug ? slug : "/",
      component: require.resolve(`./src/layout/main.js`),
      context: { 
        slug
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
