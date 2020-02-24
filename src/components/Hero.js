import React from "react"
import Img from "gatsby-image"
import RichText from "./RichText"

export default ({ heading, image, richTextContent }) => {
  // const h = heading ? <h3>{heading}</h3> : null;
  // const i = image ? <Img fluid={image.fluid} /> : null;
  // const rtc = richTextContent ? {RichText(richTextContent)} : null;

  return (
    <section className="hero">
      <div className="content">
        {heading ? <h3>{heading}</h3> : ""}
        {richTextContent ? RichText(richTextContent) : ""}
      </div>
      <div className="image">{image ? <Img fluid={image.fluid} /> : ""}</div>
    </section>
  )
}
