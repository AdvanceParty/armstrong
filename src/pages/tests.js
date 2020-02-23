// Rich Text Rendering:
// See https://www.contentful.com/developers/docs/tutorials/general/rich-text-and-gatsby/

import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"

export default ({ data }) => {
  const heroes = data.allContentfulHero.nodes

  return (
    <>
      <h2>HERO!</h2>
      <Hero {...heroes[0]} />
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
  }
`
