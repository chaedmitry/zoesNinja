import React from "react"
import { injectIntl } from "gatsby-plugin-react-intl"

const Footer = ({ intl }) => {
  return (
    <footer>
        <p>© {new Date().getFullYear()}{intl.formatMessage({id: "footer-title" })} <small class="heart">♥</small></p>
        <p class="secondary"><small>Designed by <a class="secondary" href="https://chae.design/" target="_blank" rel="noreferrer">dmitrychae</a>, illustrated by&nbsp;<a class="secondary" href="https://www.instagram.com/o.tsay_/" target="_blank" rel="noreferrer">o.tsay</a></small></p>
    </footer>
  )
}

export default injectIntl(Footer)