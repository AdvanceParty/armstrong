import { graphql } from "gatsby"

export const ArticleSummary = graphql`
  fragment ArticleSummary on ContentfulArticle {
    ...ArticleMVP
    ...ArticleThumbnail
    ...ArticleMetadata
  }
`

export const ArticleMVP = graphql`
  fragment ArticleMVP on ContentfulArticle {
    title
    description
    slug
  }
`

export const ArticleMetadata = graphql`
  fragment ArticleMetadata on ContentfulArticle {
    id
    updatedAt
    createdAt
    sys {
      revision
    }
  }
`

export const ArticleThumbnail = graphql`
  fragment ArticleThumbnail on ContentfulArticle {
    featureImage {
      ...ImageThumbnail
    }
  }
`
