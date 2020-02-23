import React from "react"
export default ({ data }) => {
  const { title, author, description } = data.contentfulArticle
  const authors = author.map(auth => auth.fullname).join(", ")
  console.log(data)
  return (
    <>
      <h1>{title}</h1>
      <h5>By: {authors}</h5>
      <blockquote>{description}</blockquote>
    </>
  )
}

export const query = graphql`
  query ArticleQuery($id: String) {
    contentfulArticle(id: { eq: $id }) {
      title
      author {
        fullname
      }
      description
      hero {
        children {
          ... on ContentfulHero {
            id
          }
        }
      }
      story {
        content {
          content {
            value
          }
        }
      }
    }
  }
`
