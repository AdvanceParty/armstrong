import React from "react"
import { StaticQuery, graphql } from "gatsby"

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query contentImage {
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
        <h1>Armstrong</h1>
        <h2>A Contentful|Gatsby Integration Test</h2>
        <p>{caption}</p>
        <img src={`https:${url}`} alt={alt} />
      </>
    )}
  />
)

export default HomePage