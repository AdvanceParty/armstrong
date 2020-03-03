import React from "react"
import Img from "gatsby-image"
import RichText from "./RichText"

export default ({ title, image, body }) => {
  // const h = heading ? <h3>{heading}</h3> : null;
  // const i = image ? <Img fluid={image.fluid} /> : null;
  // const rtc = richTextContent ? {RichText(richTextContent)} : null;
  return (
    <section className="hero fullbleed">
      <div className="content">
        {title ? <h3>{title}</h3> : ""}
        {body ? RichText(body) : ""}
      </div>
      <div className="image">{image ? <Img fluid={image.fluid} /> : ""}</div>
    </section>
  )
}
