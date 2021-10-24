import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import logo from "../../static/logo-new.png"
import { injectIntl, Link } from "gatsby-plugin-react-intl"
import LanguageSelector from "./langSelector.js"

const Header = ({ intl }) => {
  const data = useStaticQuery(graphql`
      query ContactQuery {
        site {
          siteMetadata {
            contact
          }
        }
      }`)

  return (
    <header className="header">
      <Link className="blog-name" to="/">
        <img className="blog-logo" alt="Go to the homepage" src={logo}/>
        <span className="blog-title">{intl.formatMessage({id: "header-title" })}</span>
      </Link>

      <section className="nav">
        <LanguageSelector />
        <a className="button button-normal button-icon" href={data.site.siteMetadata.contact} target="_blank" rel="noreferrer">
        <svg aria-labelledby="contact" width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title id="contact">{intl.formatMessage({id: "header-contact" })}</title>
          <path className="icon-envelope-top" d="M2 9C2 7.89543 2.89543 7 4 7H19C20.1046 7 21 7.89543 21 9V19C21 20.1046 20.1046 21 19 21H4C2.89543 21 2 20.1046 2 19V9Z" fill="#489BA8"/>
          <path className="icon-envelope-bottom" d="M11.5 14C6 14 3 10 3 10V19C3 19.5523 3.44772 20 4 20H19C19.5523 20 20 19.5523 20 19V10C20 10 17 14 11.5 14Z" fill="#9BCDD4"/>
        </svg>
        </a>
        <Link className="button button-normal" to="/chapters">
          {intl.formatMessage({id: "header-chapters-link" })}
        </Link>
      </section>
    </header>
  )
}

export default injectIntl(Header)