import React from "react"
import Img from "gatsby-image"

export default ({ image, title, caption, alt }) => {
  const figcaption =
    title || caption ? (
      <figcaption>
        {title ? <h2>{title}</h2> : ""}
        {caption ? <p>{caption}</p> : ""}
      </figcaption>
    ) : (
      ""
    )
  return (
    <figure className="imagePod">
      <Img fluid={image.fluid} alt={alt ? alt : title ? title : ""} />
      {figcaption}
    </figure>
  )
}
