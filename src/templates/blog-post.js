import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <p className="secondary date">{post.date}</p>
        <header>
          {/*<h1 itemProp="headline">{parse(post.title)}</h1>*/}
          <h1 itemProp="headline">01 The First Encounter<br></br>遇見了</h1>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.fluid && (
            <Image
              fluid={featuredImage.fluid}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {/* this is placeholder content. Remove when connect to WP */ 
        !!post.content && (
          <section itemProp="articleBody"><p>It was a Saturday, also <i>Lunar New Year’s Day</i>. Festivities without spending my annual leave allowance, nice.
          Just before bed, it was time to floss and brush my teeth. That evening, I opened my mouth super wide to make an extra check on my four wisdom teeth, to validate whether my simplified dental care regime was <strong>adequate</strong> when earlier that month I travelled light for a holiday, without bringing the electric toothbrush.</p></section>
        )}
        {!!post.content && (
          <section itemProp="articleBody">{parse(post.content)}</section>
        )}
      </article>
      {/*pagination*/}
      
      <nav className="blog-post-nav">
        <ul>
          {/*<li>
            {previous && (
              <Link className="button button-normal" to={previous.uri} rel="prev">
                ← Previous
              </Link>
            )}
            </li>*/}

          <li>
            {next && (
              <Link className="button button-normal" to={next.uri} rel="next">
                Next: {next.title} → 
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
