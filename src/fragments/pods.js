import { graphql } from "gatsby"

export const VineItemPreview = graphql`
  fragment VineItemPreview on ContentfulVine {
    title
    description
    link: slug
    thumbnail: hero {
      ...ImageThumbnail
    }
  }
`

export const HeroPod = graphql`
  fragment HeroPod on ContentfulHeroPod {
    id
    title: heading
    body: richTextContent {
      ...RichTextContent
    }
    ...ImageFluid
  }
`

export const OfficePod = graphql`
  fragment OfficePod on ContentfulOfficePod {
    id
    title
    address1
    address2
    postcode
    suburb
    state
    map {
      lat
      lon
    }
  }
`

export const ImagePod = graphql`
  fragment ImagePod on ContentfulImagePod {
    id
    title
    caption
    alt
    ...ImageFluid
  }
`

export const QuotePod = graphql`
  fragment QuotePod on ContentfulQuotePod {
    id
    source
    richTextContent {
      ...RichTextContent
    }
  }
`

export const RoyalPersonPod = graphql`
  fragment RoyalPersonPod on ContentfulRoyalPersonPod {
    id
    preferredName
    fullName
    jobTitle
    joined
    office {
      title
    }
    bioRichText {
      ...RichTextContent
    }
    ...ImageFluid
  }
`

export const RichTextContent = graphql`
  fragment RichTextContent on RichText {
    id
    json
  }
`
