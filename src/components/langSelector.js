import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "../../plugins/gatsby-plugin-react-intl"
import en from "../../static/en.png"
import zh from "../../static/zh.png"

const LanguageSelector = ({ intl }) => {
    
    if (intl.locale === "en") {
      return (
        <Link className="button button-normal lang-selector" to="/zh">
          <img className="flag" alt="Switch to Chinese" src={zh}/>
          <small className="lang-label">中</small>
        </Link>
      )}
    else {
      return (
        <Link className="button button-normal lang-selector" to="/">
          <img className="flag" alt="Switch to English" src={en}/>
          <small className="lang-label">EN</small>
        </Link>
      )}
}

export default injectIntl(LanguageSelector)