import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-react-intl"
import en from "./../../static/en.png"
import zh from "./../../static/zh.png"

const LanguageSelector = ({ intl }) => {
    
    if (intl.locale === "en") {
      return (
        <Link className="button button-normal button-icon lang-selector" to="/zh">
          <small>中</small>
        </Link>
      )}
    else {
      return (
        <Link className="button button-normal button-icon lang-selector" to="/">
          <small>EN</small>
        </Link>
      )}
}

export default injectIntl(LanguageSelector)