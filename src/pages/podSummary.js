import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const pods = data.allContentfulContentType.nodes.map(pod => (
    <section key={pod.id}>
      <p>
        <strong>{pod.name}</strong>
        <br />
        {pod.description}
      </p>
    </section>
  ))

  return (
    <Layout>
      <h1>Pods</h1>
      {pods}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulContentType(filter: { name: { regex: "/Pod$/" } }) {
      nodes {
        name
        description
        id
      }
    }
  }
`
