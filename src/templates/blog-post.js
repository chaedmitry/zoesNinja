import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { injectIntl, Link } from "gatsby-plugin-react-intl"

const BlogPostTemplate = ({ data, intl }) => {
  const { html } = data.markdownRemark
  const { title, category, excerpt, nextSlug, nextTitle } = data.markdownRemark.frontmatter
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
            <Link className="button button-normal" to={nextSlug} rel="next">
                Next: {nextTitle} → 
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default injectIntl(BlogPostTemplate)

export const query = graphql`
  query ChapterPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        category
        title
        excerpt
        nextSlug
        nextTitle
      }
    }
  }`