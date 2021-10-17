const path = require('path')

exports.createPages = async ({ graphql, actions }) => { 

  const { data } = await graphql(`
    query GetChapters {
      allMarkdownRemark {
        edges {
          node {
            fields {
              langKey
              slug
            }
          }
        }
      }
    }`)

    data.allMarkdownRemark.edges.forEach(edge => {
      actions.createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: { slug: edge.node.fields.slug }
      })
    })
  }