// import React from "react"
import { graphql } from "gatsby"

/**
 * URIs from src and srcSet start with // (no http[s])
 * src: string
 * srcSet: comma separated string of "uri size" pairs
 */

export const ImageSrcResized = graphql`
  fragment ImageSrcResized on ContentfulAsset {
    fixed(width: 200, height: 200, resizingBehavior: FILL) {
      width
      height
      src
    }
  }
`

export const ImageFluid = graphql`
  fragment ImageFluid on ContentfulImage {
    alt
    caption
    file {
      title
      description
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`
