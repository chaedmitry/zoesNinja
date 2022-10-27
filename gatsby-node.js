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
        path: node.frontmatter.slug,
        language: node.frontmatter.lang,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          language: node.frontmatter.lang,
          slug: node.frontmatter.slug,
        }
      })
    })
  }