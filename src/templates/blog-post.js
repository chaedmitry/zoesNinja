import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { injectIntl } from "gatsby-plugin-react-intl"

const BlogPostTemplate = ({ data, intl }) => {
  const { html } = data.markdownRemark
  const { title, category, excerpt, nextSlug, nextTitle } = data.markdownRemark.frontmatter
  const { timeToRead } = data.markdownRemark
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
        <p>Next chapter — <Link to={nextSlug} rel="next"> {nextTitle}</Link></p>
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