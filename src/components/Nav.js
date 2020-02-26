import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <nav id="sitenav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/podSummary">Pod Types</Link>
        </li>
        <li>PODS ➤ </li>
        <li>
          <Link to="/imagePods">Images</Link>
        </li>
        <li>
          <Link to="/heroes">Heroes</Link>
        </li>
        <li>
          <Link to="/royalProfiles">Royals</Link>
        </li>
        <li>
          <Link to="/offices">Offices</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  )
}
