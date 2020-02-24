import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  const { title, author, description } = data.contentfulArticle
  const authors = author.map(auth => auth.fullName).join(", ")
  console.log(data)
  return (
    <Layout>
      <h1>{title}</h1>
      <h5>By: {authors}</h5>
      <blockquote>{description}</blockquote>
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($id: String) {
    contentfulArticle(id: { eq: $id }) {
      title
      author {
        fullName
      }
      description
      hero {
        children {
          ... on ContentfulHero {
            id
          }
        }
      }
      richTextContent {
        json
      }
    }
  }
`
