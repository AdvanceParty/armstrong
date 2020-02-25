// import React from "react"
import { graphql } from "gatsby"

/**
 * URIs from src and srcSet start with // (no http[s])
 * src: string
 * srcSet: comma separated string of "uri size" pairs
 */
export const ImageFluid = graphql`
  fragment ImageFluid on ImageContainer {
    image {
      id
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }
`

export const ImageThumbnal = graphql`
  fragment ImageThumbnal on ImageContainer {
    image {
      id
      fixed(width: 200, height: 200, resizingBehavior: FILL) {
        width
        height
        src
      }
    }
  }
`
