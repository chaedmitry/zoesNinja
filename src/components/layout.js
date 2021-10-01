import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header.js"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
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
            <footer>
              © {new Date().getFullYear()}. From Zoe with ❤️
            </footer> 
          </div>
      </div>
  )
}

export default Layout
