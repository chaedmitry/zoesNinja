import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from "../../content/assets/logo.png"

export default function Header() {
  return (
    <header className="header">
      <Link className = "blogName" href="/about">
        <img className="blogLogo" src={logo}/>
        <span className="blogTitle">Zoe's Ninja</span>
      </Link>

      <section className="nav">
        <a className="button" href="/">
        <svg className="iconChapters" width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10ZM3 14C3 13.4477 3.44772 13 4 13H16C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15H4C3.44772 15 3 14.5523 3 14ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H11C11.5523 19 12 18.5523 12 18C12 17.4477 11.5523 17 11 17H4Z" fill="#489BA8"/>
        </svg>
          Chapters
        </a>
      </section>
    </header>
  )
}