import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
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
    <div className="global-wrapper">
    <Header/>
    <div className="content" data-is-root-path={isHomePage}>
      <main>{children}</main>
    </div>
    <footer>
        © {new Date().getFullYear()}, From Zoe with love.
    </footer>
    </div>
  )
}

export default Layout
