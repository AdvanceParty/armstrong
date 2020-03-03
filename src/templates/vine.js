import React from "react"
import RichText from "../components/RichText"
import Layout from "../components/layout"

export default ({ data }) => {
  const { title, subtitle, description, richTextContent } = data.contentfulVine
  return (
    <Layout>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      <blockquote>{description}</blockquote>
      <div>{RichText(richTextContent)}</div>
    </Layout>
  )
}

export const query = graphql`
  query VineQuery($id: String) {
    contentfulVine(id: { eq: $id }) {
      title
      subtitle
      description
      type
    }
  }
`
