import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from "../../content/assets/logo.png"

export default function Header() {
  return (
    <header className="header">
      <Link className="blogName" to="/about">
        <img className="blogLogo" src={logo}/>
        <span className="blogTitle">Zoe's Ninja</span>
      </Link>

      <section className="nav">
        <a className="button" href="/">
        <svg className="iconChapters" width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" d="m2 9c0-.55228.44772-1 1-1h14c.5523 0 1 .44772 1 1s-.4477 1-1 1h-14c-.55228 0-1-.44772-1-1zm0 5c0-.5523.44772-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1h-8c-.55228 0-1-.4477-1-1zm1 4c-.55228 0-1 .4477-1 1s.44772 1 1 1h10c.5523 0 1-.4477 1-1s-.4477-1-1-1z" fill="#489ba8" fillRule="evenodd"/>
        </svg>
          Chapters
        </a>
      </section>
    </header>
  )
}