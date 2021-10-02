import React from "react"
import { Link } from "gatsby"
import logo from "../../content/assets/logo.png"


export default function Header() {
  return (
    <header className="header">
      <Link className="blog-name" to="/">
        <img className="blog-logo" src={logo}/>
        <span className="blog-title">Zoe's Ninja</span>
      </Link>

      <section className="nav">
        <a className="button button-normal button-icon" href="https://forms.gle/4jVrUdu7TSTtFoVy5" target="_blank">
          <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="icon-path" fillRule="evenodd" clipRule="evenodd" d="M1 9C1 8.44772 1.44772 8 2 8H18C18.5523 8 19 8.44772 19 9V19C19 19.5523 18.5523 20 18 20H2C1.44772 20 1 19.5523 1 19V9ZM15 10H5L9.68765 13.7501C9.87026 13.8962 10.1297 13.8962 10.3123 13.7501L15 10ZM3 11L9.38218 16.0146C9.74479 16.2995 10.2552 16.2995 10.6178 16.0146L17 11V18H3V11Z" fill="#489BA8"/>
          </svg>
        </a>
        <Link className="button button-normal chapters-button" to="/chapters">
          <svg className="icon-chapters" width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="icon-path" clipRule="evenodd" d="m2 9c0-.55228.44772-1 1-1h14c.5523 0 1 .44772 1 1s-.4477 1-1 1h-14c-.55228 0-1-.44772-1-1zm0 5c0-.5523.44772-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1h-8c-.55228 0-1-.4477-1-1zm1 4c-.55228 0-1 .4477-1 1s.44772 1 1 1h10c.5523 0 1-.4477 1-1s-.4477-1-1-1z" fill="#489ba8" fillRule="evenodd"/>
          </svg>
          Chapters
        </Link>
      </section>
    </header>
  )
}