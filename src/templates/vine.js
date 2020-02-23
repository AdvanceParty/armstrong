import React from "react"
import RichText from "../components/RichText"

export default ({ data }) => {
  const { title, subtitle, description, story } = data.contentfulVine
  return (
    <>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      <blockquote>{description}</blockquote>
      <div>{RichText(story)}</div>
    </>
  )
}

export const query = graphql`
  query VineQuery($id: String) {
    contentfulVine(id: { eq: $id }) {
      title
      subtitle
      description
      category
      story {
        json
      }
    }
  }
`
