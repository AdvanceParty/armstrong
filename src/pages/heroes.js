import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/layout"

export default ({ data }) => {
  const heroes = data.allContentfulHero.nodes.map(hero => (
    <Hero {...hero} key={hero.id} />
  ))

  return (
    <Layout>
      <h1>Heroic</h1>
      {heroes}
      <hr />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulHero {
      nodes {
        id
        heading
        richTextContent {
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
