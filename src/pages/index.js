import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LadyPic from "../components/ladyPic"
import { injectIntl, Link } from "../../plugins/gatsby-plugin-react-intl"

const Home = ({ intl, location }) => {
  return (
      <Layout isHomePage path={location.pathname} lang={intl.locale}>
        <Seo title={intl.formatMessage({id: "seo-home-title" })} lang={intl.locale === `zh` ? `zh-HK` : intl.locale} />
        <h1>{intl.formatMessage({id: "homepage-title" })}</h1>
        <div dangerouslySetInnerHTML={{__html: intl.formatMessage({id: "homepage-p1" })}}></div>
        <LadyPic />
        <div dangerouslySetInnerHTML={{__html: intl.formatMessage({id: "homepage-p2" })}}></div>
        <div dangerouslySetInnerHTML={{__html: intl.formatMessage({id: "homepage-p3" })}}></div>
        <Link className="button button-accent start" to={`/chapters/01-the-first-encounter-${intl.locale}`}>{intl.formatMessage({id: "button-start" })}</Link>
      </Layout>
  )
}

export default injectIntl(Home)