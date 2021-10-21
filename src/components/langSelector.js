import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-react-intl"

const LanguageSelector = ({ intl }) => {
    
    if (intl.locale === "en") {
      return (
        <Link className="button button-normal button-icon lang-selector" to="/zh">🇨🇳</Link>
      )}
    else {
      return (
        <Link className="button button-normal button-icon lang-selector" to="/">🇬🇧</Link>
      )}
}

export default injectIntl(LanguageSelector)