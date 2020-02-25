import React from "react"
import { graphql } from "gatsby"
import Quote from "../components/Quote"
import Layout from "../components/layout"

export default ({ data }) => {
  const quotes = data.allContentfulQuote.nodes.map(quote => (
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
    allContentfulQuote {
      nodes {
        id
        source
        richTextContent {
          json
        }
      }
    }
  }
`
