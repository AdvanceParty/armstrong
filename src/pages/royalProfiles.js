import React from "react"
import { graphql } from "gatsby"
import RoyalProfile from "../components/RoyalProfile"
import Layout from "../components/layout"

export default ({ data }) => {
  const royals = data.allContentfulRoyalPersonPod.nodes.map(royal => (
    <RoyalProfile {...royal} key={royal.id} />
  ))

  return (
    <Layout>
      <h1>Royal Bios</h1>
      {royals}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRoyalPersonPod {
      nodes {
        id
        preferredName
        fullName
        jobTitle
        joined
        office {
          title
        }
        bioRichText {
          json
        }
        ...ImageFluid
      }
    }
  }
`
