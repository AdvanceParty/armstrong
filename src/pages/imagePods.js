import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImagePod from "../components/ImagePod"

export default ({ data }) => {
  const images = data.allContentfulImagePod.nodes.map(image => (
    <ImagePod {...image} key={image.id} />
  ))

  return (
    <Layout>
      <h1>Image Pods</h1>
      {images}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulImagePod {
      nodes {
        id
        title
        caption
        alt
        ...ImageFluid
      }
    }
  }
`
