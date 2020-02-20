import React from "react"
import { graphql } from "gatsby"
import ArticleSummaryItem from "../components/ArticleSummaryItem"

import ContentfulMetadataModel from "../models/ContentfulMetadataModel"
import ThumbnailModel from "../models/ThumbnailModel"

export default ({ data }) => {
  const { edges } = data.allContentfulArticle

  const items = edges.map(edge => {
    const { title, description, slug } = edge.node

    const props = { title, description, slug }
    props.metadata = new ContentfulMetadataModel({ ...edge.node })
    props.thumbnail = new ThumbnailModel(edge.node.featureImage.file.fixed)

    return <ArticleSummaryItem {...props} key={slug} />
  })

  return (
    <>
      <h1>Articles</h1>
      {items}
    </>
  )
}

export const query = graphql`
  query {
    allContentfulArticle {
      edges {
        node {
          ...ArticleSummary
        }
      }
    }
  }
`
