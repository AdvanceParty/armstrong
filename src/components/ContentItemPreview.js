import React from "react"
import { Link } from "gatsby"

export default ({ title, description, thumbnailURL, slug, id }) => {
  return (
    <section data-type-content="preview" id={id}>
      <h3>{title}</h3>
      {thumbnailURL ? (
        <img src={thumbnailURL} alt={`${title} (Thumbnail)`} />
      ) : (
        ""
      )}
      <p>{description}</p>
      <Link to={`/${slug}`}>Check it out!</Link>
    </section>
  )
}
