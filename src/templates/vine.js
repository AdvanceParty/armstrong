import React from "react"
export default ({ data }) => {
  const { title, subtitle, description, story } = data.contentfulVine
  const storyBasic = story.content.map(item => item.content[0].value)

  console.log(story.content)
  console.log(storyBasic)
  return (
    <>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      <blockquote>{description}</blockquote>
      <div>{storyBasic}</div>
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
        content {
          content {
            value
          }
        }
      }
    }
  }
`
