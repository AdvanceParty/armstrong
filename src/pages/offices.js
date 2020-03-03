import React from "react"
import { graphql } from "gatsby"
import Office from "../components/Office"
import Layout from "../components/layout"

export default ({ data }) => {
  const offices = data.allContentfulOfficePod.nodes.map(office => (
    <Office {...office} key={office.id} />
  ))

  return (
    <Layout>
      <h1>Our Offices</h1>
      {offices}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulOfficePod {
      nodes {
        ...OfficePod
      }
    }
  }
`
