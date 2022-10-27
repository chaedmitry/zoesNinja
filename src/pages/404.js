import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { injectIntl } from "../../plugins/gatsby-plugin-react-intl"

const NotFoundPage = ({ data, location, intl }) => {

  return (
    <Layout path={location.pathname} lang={intl.locale}>
      <Seo title="404: Not Found"  lang={intl.locale === `zh` ? `zh-HK` : intl.locale} />
      <h1>{intl.formatMessage({id: "404-title" })}</h1>
      <p>{intl.formatMessage({id: "404-message" })}</p>
    </Layout>
  )
}

export default injectIntl(NotFoundPage)
