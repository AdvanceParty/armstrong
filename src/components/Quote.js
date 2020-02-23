import React from "react"
import RichText from "./RichText"

export default ({ content, source }) => {
  return (
    <figure className="quote">
      {RichText(content)}
      <figcaption>{source}</figcaption>
    </figure>
  )
}
