import React from "react"
import { injectIntl } from "gatsby-plugin-react-intl"

const Footer = ({ intl }) => {
  return (
    <footer>
        © {new Date().getFullYear()}{intl.formatMessage({id: "footer-title" })}
    </footer>
  )
}

export default injectIntl(Footer)