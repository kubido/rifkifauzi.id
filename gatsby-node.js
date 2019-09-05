
const { createFilePath } = require(`gatsby-source-filesystem`)

const slugify = (string) => {
  const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
  const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

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

  const tags = []

  
  data.allMarkdownRemark.edges.forEach(edge => {
    let slug = edge.node.fields.slug
    slug = slug ? slug : "/"
    const layout = slug ? "post_detail" : "main"
    console.log('------------>', slug)
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/layout/${layout}.js`),
      context: { 
        slug
      },
    })
    if(edge.node.frontmatter.tags){
      edge.node.frontmatter.tags.forEach(tag => {
        if(!tags.includes(tag)){
          tags.push(tag)
        }
      });
    }
       

  })

  tags.forEach( tag => {
    
    actions.createPage({
      path: `/tags/${slugify(tag)}`,
      component: require.resolve(`./src/layout/tags.js`),
      context: { 
        tag: slugify(tag)
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
      value: `/blog${value}`,
    })
  }
}
