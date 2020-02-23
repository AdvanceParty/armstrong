import React from "react"
import Img from "gatsby-image"
import RichText from "./RichText"

export default ({ heading, image, body }) => {
  return (
    <section className="hero">
      <h3>{heading}</h3>
      {RichText(body)}
      <Img fluid={image.fluid} />
    </section>
  )
}
