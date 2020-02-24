import React from "react"
import RichText from "./RichText"
import Img from "gatsby-image"

export default ({ fullName, jobTitle, joined, office, image, bioRichText }) => {
  const subtitle = `${jobTitle} ${
    office && office.title ? `in ${office.title}` : ""
  }`

  return (
    <>
      <h3>{fullName}</h3>
      {subtitle ? <p>{subtitle}</p> : ""}
      {joined ? <p>Royal since {joined}</p> : ""}
      {image && image.fluid ? <Img fluid={image.fluid} /> : ""}
      {RichText(bioRichText)}
    </>
  )
}
