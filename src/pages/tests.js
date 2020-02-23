// Rich Text Rendering:
// See https://www.contentful.com/developers/docs/tutorials/general/rich-text-and-gatsby/

import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Quote from "../components/Quote"

export default ({ data }) => {
  const heroes = data.allContentfulHero.nodes
  const quotes = data.allContentfulQuote.nodes

  return (
    <>
      <h5>A hero:</h5>
      <Hero {...heroes[0]} />
      <hr />
      <h5>A Quote:</h5>
      <Quote {...quotes[0]} />
    </>
  )
}

export const query = graphql`
  query QueryHero {
    allContentfulHero {
      nodes {
        heading
        body {
          json
        }
        image {
          id
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    allContentfulQuote {
      nodes {
        content {
          json
        }
        source
      }
    }
  }
`
