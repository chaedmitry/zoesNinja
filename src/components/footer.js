import React from "react"
import { injectIntl } from "gatsby-plugin-react-intl"

const Footer = ({ intl }) => {
  return (
    <footer>
        <p>© {new Date().getFullYear()}{intl.formatMessage({id: "footer-title" })} <small className="heart">♥</small></p>
        <div dangerouslySetInnerHTML={{__html: intl.formatMessage({id: "footer-credits" })}}></div>
    </footer>
  )
}

export default injectIntl(Footer)