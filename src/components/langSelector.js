import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-react-intl"
import en from "./../../static/en.png"
import zh from "./../../static/zh.png"

const LanguageSelector = ({ intl }) => {
    
    if (intl.locale === "en") {
      return (
        <Link className="button button-normal button-icon lang-selector" to="/zh">
          <img className="flag" alt="Switch to Chinese" src={zh}/>
        </Link>
      )}
    else {
      return (
        <Link className="button button-normal button-icon lang-selector" to="/">
          <img className="flag" alt="Switch to English" src={en}/>
        </Link>
      )}
}

export default injectIntl(LanguageSelector)