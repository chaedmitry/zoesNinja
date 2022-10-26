import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "../../plugins/gatsby-plugin-react-intl"
import en from "../../static/en.png"
import zh from "../../static/zh.png"
import { string } from "prop-types";

const LanguageSelector = ({ intl, path }) => {
    if (intl.locale === "en") {
      const newPath = String(path).replace(/^\/en/, "/zh")
      return (
        <Link className="button button-normal lang-selector" to={newPath}>
          <img className="flag" alt="Switch to Chinese" src={zh}/>
          <small className="lang-label">中</small>
        </Link>
      )}
    else {
      const newPath = String(path).replace(/^\/zh/, "/en")
      return (
        <Link className="button button-normal lang-selector" to={newPath}>
          <img className="flag" alt="Switch to English" src={en}/>
          <small className="lang-label">EN</small>
        </Link>
      )}
}

export default injectIntl(LanguageSelector)