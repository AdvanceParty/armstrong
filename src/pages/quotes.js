import React from "react"
import { graphql } from "gatsby"
import Quote from "../components/Quote"
import Layout from "../components/layout"

export default ({ data }) => {
  const quotes = data.allContentfulQuotePod.nodes.map(quote => (
    <Quote {...quote} key={quote.id} />
  ))

  return (
    <Layout>
      <h1>Quotable</h1>
      {quotes}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulQuotePod {
      nodes {
        ...QuotePod
      }
    }
  }
`
