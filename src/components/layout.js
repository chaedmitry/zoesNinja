import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header.js"
import Footer from "./footer.js"

const Layout = ({ isHomePage, children }) => {
  const {
    site: {siteMetadata: { title },},
  } = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
      <div className="global-wrapper" data-is-root-path={isHomePage}>
        <Header/>
          <div className="content">
            <main>{children}</main>
            <Footer />
          </div>
      </div>
  )
}

export default Layout