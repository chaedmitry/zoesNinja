import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
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
      <ol className="chapters" style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title

          return (
            <li key={post.uri}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.uri} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </Link>
                  </h2>
                  <p className='secondary'>{post.date}</p>
                </header>
              </article>
            </li>
          )
        })}
      </ol>

      {/*{previousPagePath && (
        <>
          <Link className="pagination" to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link className="pagination" to={nextPagePath}>Next page</Link>}*/}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!) {
    allWpPost(
      sort: { fields: [date], order: ASC }
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM D, YYYY")
        title
        excerpt
      }
    }
  }
`
