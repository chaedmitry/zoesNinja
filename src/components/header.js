import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        Zoe's Ninja
      </Link>

      <div>
        Navigation
      </div>
    </header>
  )
}