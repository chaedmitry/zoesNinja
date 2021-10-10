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

const BlogPostTemplate = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, category, excerpt } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Seo title={title} description={excerpt} />

      <article className="blog-post" itemScope itemType="http://schema.org/Article">
        <p className="secondary category">{category}</p>
        <header>
          <h1 itemProp="headline">{title}</h1>
        </header>
        <section itemProp="articleBody" dangerouslySetInnerHTML={{__html: html}}/>
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
            <Link className="button button-normal" to='/' rel="next">
                Next: → 
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query ChapterPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        category
        slug
        title
        excerpt
      }
    }
  }`