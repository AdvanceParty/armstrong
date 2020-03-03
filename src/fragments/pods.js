import { graphql } from "gatsby"

export const VinePreviewItem = graphql`
  fragment VinePreviewItem on ContentfulVine {
    slug
    id
    title
    description
    type
    hero {
      ...ImageThumbnail
    }
  }
`

export const RichTextContent = graphql`
  fragment RichTextContent on RichText {
    id
    json
  }
`

export const HeroPod = graphql`
  fragment HeroPod on ContentfulHeroPod {
    id
    heading
    richTextContent {
      ...RichTextContent
    }

    ...ImageThumbnail
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

// export const ArticleMVP = graphql`
//   fragment ArticleMVP on ContentfulArticle {
//     title
//     description
//     slug
//   }
// `

// export const ArticleMetadata = graphql`
//   fragment ArticleMetadata on ContentfulArticle {
//     id
//     updatedAt
//     createdAt
//     sys {
//       revision
//     }
//   }
// `

// export const ArticleThumbnail = graphql`
//   fragment ArticleThumbnail on ContentfulArticle {
//     featureImage {
//       ...ImageThumbnail
//     }
//   }
// `
