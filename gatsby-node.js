const path = require('path')

exports.createPages = async ({ graphql, actions }) => { 

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            lang
          }
        }
      }
    }`)

    data.allMarkdownRemark.nodes.forEach(node => {
      actions.createPage({
        path: `/chapters/${node.frontmatter.slug}`,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.frontmatter.slug,
        }
      })
    })
  }