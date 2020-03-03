import React from "react"
import { graphql } from "gatsby"
import ContentItemPreview from "../components/ContentItemPreview"
import Layout from "../components/layout"

export default ({ data }) => {
  const vineData = data.allContentfulVine.nodes

  const work = vineData.filter(node => node.type === "work")
  const articles = vineData.filter(node => node.type === "article")

  const getItemPreviewElement = node => {
    const { thumbnail, link, ...props } = node
    props.linkTo = link ? `/${link}` : null

    if (thumbnail && thumbnail.image && thumbnail.image.fixed) {
      props.thumbnailURL = thumbnail.image.fixed.src
    }

    return <ContentItemPreview {...props} key={props.id} />
  }

  return (
    <Layout>
      <h2>Work</h2>
      {work.map(node => getItemPreviewElement(node))}

      <h2>Articles</h2>
      {articles.map(node => getItemPreviewElement(node))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulVine {
      nodes {
        type
        ...VineItemPreview
      }
    }
  }
`
