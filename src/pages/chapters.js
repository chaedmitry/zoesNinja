import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { injectIntl, Link } from "gatsby-plugin-react-intl"

const BlogIndex = ( {data, intl} ) => {
  const posts = data.allMarkdownRemark.nodes
  const locale = intl.locale !== "en" ? `/${intl.locale}` : ""
  if (!posts.length) {
    return (
      <Layout>
        <Seo title={intl.formatMessage({id: "seo-chapters-title" })} />
        <p>
        {intl.formatMessage({id: "chapters-message" })}
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title={intl.formatMessage({id: "seo-chapters-title" })} />
      <h1>{intl.formatMessage({id: "chapters-title" })}</h1>
      <ol className="chapters">
        {posts.map(post => {
          const title = post.frontmatter.title

          return (
            <li key={post.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={"/chapters/"+post.frontmatter.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <p className='secondary'>{post.frontmatter.category}</p>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default injectIntl(BlogIndex)

export const pageQuery = graphql`
  query ListAllChapters {
    allMarkdownRemark (sort: {fields: frontmatter___title, order: ASC}){
      nodes {
        frontmatter {
          title
          slug
          category
          lang
        }
        id
      }
    }
  }`