import React from "react"
import { graphql } from "gatsby"
import ContentItemPreview from "../components/ContentItemPreview"
import Layout from "../components/layout"

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
    <Layout>
      <h1>Vines</h1>
      {vines}
      <h2>Articles</h2>
      {articles}
    </Layout>
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
