import React from "react"
import { graphql } from "gatsby"
import ArticleListItem from "../components/ArticleListItem"

import ContentfulMetadataModel from "../models/ContentfulMetadataModel"
import ThumbnailModel from "../models/ThumbnailModel"

import { inspect } from "../modules/utils"
// import Img from "gatsby-image"

export default ({ data }) => {
  const { edges } = data.allContentfulArticle

  const items = edges.map(edge => {
    const { title, description, slug } = edge.node

    const metadata = new ContentfulMetadataModel({ ...edge.node })
    // const thumbnail = new ThumbnailModel(edge.node.featureImage.file.fixed)
    const thumbnail = edge.node.featureImage.file.fixed
    const props = { title, description, slug, metadata, thumbnail }

    console.log(inspect(edge.node))

    return <ArticleListItem {...props} key={slug} />
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
