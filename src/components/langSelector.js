import React from "react"
import { Link } from "gatsby"

const LanguageSelector = () => {
    
    return (
    <div>
      <ul className="lang-selector">
        <li>
          <Link to="/">En</Link>
        </li>
        <li>
          <Link to="/zh">Zh</Link>
        </li>
      </ul>
    </div>
  )
}

export default LanguageSelector