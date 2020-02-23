import React from "react"

export default ({ title, slug, id, description }) => {
  return (
    <section data-type-content="preview" id={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={`/${slug}`}>Check it out, yo.</a>
    </section>
  )
}
