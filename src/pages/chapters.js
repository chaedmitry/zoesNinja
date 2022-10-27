import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { injectIntl, Link } from "../../plugins/gatsby-plugin-react-intl"

const BlogIndex = ( {data, location, intl} ) => {
  const posts = data.allMarkdownRemark.nodes
  const filteredPosts = posts.filter((post) =>
    post.frontmatter.lang.includes(intl.locale)
  )

  if (!posts.length) {
    return (
      <Layout path={location.pathname} lang={intl.locale}>
        <Seo title={intl.formatMessage({id: "seo-chapters-title" })} lang={intl.locale === `zh` ? `zh-HK` : intl.locale} />
        <p>
        {intl.formatMessage({id: "chapters-message" })}
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage path={location.pathname} lang={intl.locale}>
      <Seo title={intl.formatMessage({id: "seo-chapters-title" })} lang={intl.locale === `zh` ? `zh-HK` : intl.locale} />
      <h1>{intl.formatMessage({id: "chapters-title" })}</h1>
      <ol className="chapters-list">
        {filteredPosts.map(post => {
          const title = post.frontmatter.title

          return (
            <li className="post-list-item" key={post.frontmatter.slug}>
              <h2>
                <Link to={post.frontmatter.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </h2>
              <p className='secondary'>{post.frontmatter.category}</p>
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
          excerpt
        }
        id
      }
    }
  }`