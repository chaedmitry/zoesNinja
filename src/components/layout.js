import React from "react"
import Header from "./header.js"
import Footer from "./footer.js"

const Layout = ({ isHomePage, path, lang, children }) => {
  return (
      <div className="global-wrapper" data-is-root-path={isHomePage}>
        <Header path={path} lang={lang} />
          <div className="content">
            <main>{children}</main>
            <Footer lang={lang}/>
          </div>
      </div>
  )
}

export default Layout