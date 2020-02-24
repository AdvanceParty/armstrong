import React from "react"
import Nav from "./Nav"
export default ({ children }) => (
  <>
    <Nav />
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  </>
)
