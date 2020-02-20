import { graphql } from "gatsby"

export const ArticleSummary = graphql`
  fragment ArticleSummary on ContentfulArticle {
    title
    description
    slug
    ...ArticleThumbnail
    ...ArticleMetadata
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
      file {
        ...ImageSrcResized
      }
    }
  }
`
