import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ImageList = () => (
  <StaticQuery
    query={graphql`
      query imageList {
        contentfulImage {
          alt
          caption
          file {
            file {
              contentType
              fileName
              url
            }
          }
        }
      }
    `}
    render={({
      contentfulImage: {
        alt,
        caption,
        file: {
          file: { url },
        },
      },
    }) => (
      <>
        <h1>Images:</h1>
        <p>{caption}</p>
        <img src={`https:${url}`} alt={alt} />
      </>
    )}
  />
)

export default ImageList
