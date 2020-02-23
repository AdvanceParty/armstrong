import React from "react"
import { graphql } from "gatsby"
import ContentItemPreview from "../components/ContentItemPreview"

export default ({ data }) => {
  const vineData = data.allContentfulVine.nodes
  const articleData = data.allContentfulArticle.nodes

  const vines = vineData.map(node => (
    <ContentItemPreview {...node} key={node.id} />
  ))
  const articles = articleData.map(node => (
    <ContentItemPreview {...node} key={node.id} />
  ))

  return (
    <>
      <h2>Vines</h2>
      {vines}
      <h2>Articles</h2>
      {articles}
    </>
  )
}

export const query = graphql`
  query {
    allContentfulVine {
      nodes {
        slug
        id
        title
        description
      }
    }
    allContentfulArticle {
      nodes {
        slug
        id
        title
        description
      }
    }
  }
`
