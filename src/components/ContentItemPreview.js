import React from "react"
import { Link } from "gatsby"
import {
  getTitleElem,
  getParaElem,
  getLinkElem,
  getThumbnailElem,
} from "../htmlFormatters"

// const getTitleElem = title => {
//   return title ? <h3>{title}</h3> : ""
// }

// const getDescriptionElem = description => {
//   return description ? <p>{description}</p> : ""
// }

// const getLinkElem = slug => {
//   return slug ? <Link to={`/${slug}`}>Check it</Link> : ""
// }

// const getThumbnailElem = (thumbnailURL, title) => {
//   return thumbnailURL ? <img src={thumbnailURL} alt={title || ""} /> : ""
// }

export default ({ title, description, thumbnailURL, slug, id }) => {
  return (
    <section data-type-content="preview" id={id}>
      {/* {getThumbnailElem(thumbnailURL, title)} */}
      {getTitleElem(title)}
      {getParaElem(description)}
      {getLinkElem(slug)}
    </section>
  )
}
