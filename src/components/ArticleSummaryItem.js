import React from "react"

export default ({ title, description, slug, thumbnail, metadata }) => {
  return (
    <article data-type="summary" data-id={metadata.id}>
      <h1 className="h3">{title}</h1>
      <img src={thumbnail.src} alt={title} />
      <p className="description">{description}</p>
      <a className="link" href={`/articles/${slug}`}>
        Read the article.
      </a>
    </article>
  )
}
