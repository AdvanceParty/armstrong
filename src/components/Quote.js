import React from "react"
import RichText from "./RichText"

export default ({ richTextContent, source }) => {
  return (
    <figure className="quote">
      {RichText(richTextContent)}
      <figcaption>{source}</figcaption>
    </figure>
  )
}
