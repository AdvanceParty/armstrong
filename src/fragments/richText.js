import { graphql } from "gatsby"

export const ImageThumbnail = graphql`
  fragment GenericRichText on RichText {
    id
    json
  }
`
