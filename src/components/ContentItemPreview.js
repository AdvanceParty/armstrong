import React from "react"
import { Link } from "gatsby"

export default ({ title, description, thumbnailURL, link, id }) => {
  return (
    <section data-type-content="preview" id={id}>
      <h3>{title}</h3>
      <img src={thumbnailURL} alt={`${title} (Thumbnail)`} />
      <p>{description}</p>
      <Link to={link} />
    </section>
  )
}
