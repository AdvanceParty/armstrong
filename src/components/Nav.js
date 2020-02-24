import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quotes">Demo: Quotes</Link>
        </li>
        <li>
          <Link to="/heroes">Demo: Hero</Link>
        </li>
        <li>
          <Link to="/royalProfiles">Demo: Royals' Profiles</Link>
        </li>
        <li>
          <Link to="/offices">Demo: Offices</Link>
        </li>
        <li>
          <Link to="/imagePods">Demo: Image Pods</Link>
        </li>
      </ul>
    </nav>
  )
}
