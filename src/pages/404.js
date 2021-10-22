import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { injectIntl } from "gatsby-plugin-react-intl"

const NotFoundPage = ({ data, location, intl }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>{intl.formatMessage({id: "404-title" })}</h1>
      <p>{intl.formatMessage({id: "404-message" })}</p>
    </Layout>
  )
}

export default injectIntl(NotFoundPage)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`