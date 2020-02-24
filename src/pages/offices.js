import React from "react"
import { graphql } from "gatsby"
import Office from "../components/Office"
import Layout from "../components/layout"

export default ({ data }) => {
  const offices = data.allContentfulOffice.nodes.map(office => (
    <Office {...office} key={office.id} />
  ))

  return (
    <Layout>
      <h1>Our Offices</h1>
      {offices}
      <hr />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulOffice {
      nodes {
        id
        address1
        address2
        title
        postcode
        suburb
        state
        map {
          lat
          lon
        }
      }
    }
  }
`
