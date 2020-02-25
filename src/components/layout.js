import React from "react"
import Nav from "./Nav"
export default ({ children }) => (
  <div id="outer">
    <Nav />
    <main>{children}</main>
    <footer>A Royals Joint</footer>
  </div>
)
