import React from "react"
import { injectIntl } from "gatsby-plugin-react-intl"

const Footer = ({ intl }) => {
  return (
    <footer>
        <p>© {new Date().getFullYear()}{intl.formatMessage({id: "footer-title" })} <small>{intl.formatMessage({id: "footer-heart" })}</small></p>
    </footer>
  )
}

export default injectIntl(Footer)