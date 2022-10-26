import React from "react"
import logo from "../../static/logo.gif"
import { injectIntl, Link } from "../../plugins/gatsby-plugin-react-intl"
import LanguageSelector from "./langSelector.js"

const Header = ({ intl }) => {
  return (
    <header className="header">
      <Link className="blog-name" to="/">
        <img className="blog-logo" alt="Go to the homepage" src={logo}/>
        <span className="blog-title">{intl.formatMessage({id: "header-title" })}</span>
      </Link>

      <section className="nav">
        <LanguageSelector />

        <a className="button button-normal button-icon" href={intl.formatMessage({id: "header-contact-link" })} target="_blank" rel="noreferrer">
          <svg aria-labelledby="contact" width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title id="contact">{intl.formatMessage({id: "header-contact" })}</title>
            <path className="icon-color-dark" d="M2 9C2 7.89543 2.89543 7 4 7H19C20.1046 7 21 7.89543 21 9V19C21 20.1046 20.1046 21 19 21H4C2.89543 21 2 20.1046 2 19V9Z" fill="#489BA8"/>
            <path className="icon-color-light" d="M11.5 14C6 14 3 10 3 10V19C3 19.5523 3.44772 20 4 20H19C19.5523 20 20 19.5523 20 19V10C20 10 17 14 11.5 14Z" fill="#9BCDD4"/>
          </svg>
        </a>

        <Link className="button button-normal button-icon chapters-icon" to="/chapters">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="icon-color-dark" d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1V1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1V1Z" fill="#489BA8"/>
            <rect className="icon-color-dark" y="5" width="16" height="2" rx="1" fill="#489BA8"/>
            <rect className="icon-color-light" y="10" width="11" height="2" rx="1" fill="#9BCDD4"/>
          </svg>
        </Link>

        <Link className="button button-normal chapters-label" to="/chapters">
          {intl.formatMessage({id: "header-chapters-link" })}
        </Link>
      </section>
    </header>
  )
}

export default injectIntl(Header)