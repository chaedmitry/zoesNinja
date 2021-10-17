import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ( {data} ) => {
  const posts = data.allMarkdownRemark.nodes

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="Chapters" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="Chapters" />
      <h1>Chapters</h1>
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
                    <Link to={post.fields.slug} itemProp="url">
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

export default BlogIndex

export const pageQuery = graphql`
  query QueryChapters {
    allMarkdownRemark (sort: {fields: frontmatter___title, order: ASC}){
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          slug
          category
        }
        id
      }
    }
  }`