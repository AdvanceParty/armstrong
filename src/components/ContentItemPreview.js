import React from "react"
import {
  getTitleElem,
  getParaElem,
  getLinkElem,
  getThumbnailElem,
} from "../htmlFormatters"

export default ({ title, description, thumbnailURL, linkTo, id }) => {
  return (
    <section data-type-content="preview" id={id}>
      {getThumbnailElem({ src: thumbnailURL })}
      {getTitleElem({ content: title, level: 4 })}
      {getParaElem({ content: description })}
      {getLinkElem({ target: linkTo, content: title })}
    </section>
  )
}
