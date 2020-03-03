const path = require(`path`)

// Generate pages at compile time
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const vineTemplate = path.resolve("./src/templates/vine.js")
  const result = await graphql(`
    query {
      allContentfulVine {
        nodes {
          slug
          id
        }
      }
    }
  `)

  const { allContentfulVine } = result.data
  const vines = allContentfulVine.nodes.map(item => ({
    ...item,
    component: vineTemplate,
  }))

  vines.forEach(page => {
    createPage({
      path: `/${page.slug}/`,
      component: `${page.component}`,
      context: {
        id: `${page.id}`,
      },
    })
  })
}

// const richTextImplementors = [
//   "contentfulVineStoryRichTextNode",
//   "contentfulHeroPodBodyRichTextNode",
//   "contentfulCalloutPodContentRichTextNode",
//   "contentfulRoyalPersonPodBioRichTextNode",
// ]

// const imageContainerImplementors = [
//   "ContentfulImagePod",
//   "ContentfulHeroPod",
//   "ContentfulRoyalPersonPod",
// ]

// const imageContDefs = imageContainerImplementors.map(
//   type => `
//   type ${type} implements Node & ImageContainer {
//     image:ContentfulAsset
//   }`
// )

// const richTextDefs = richTextImplementors.map(
//   type => `
//   type ${type} implements Node & RichText {
//     id: ID!
//     json: JSON
//   }`
// )

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  // const typeDefs = [...richTextDefs, ...imageContDefs].join("\n")
  const typeDefs = `
    interface RichText {
        id: ID!
        json: JSON
    }
    type contentfulVineStoryRichTextNode implements Node & RichText {
        id: ID!
        json: JSON
    }
    type contentfulHeroPodBodyRichTextNode implements Node & RichText {
        id: ID!
        json: JSON
    }
    type contentfulCalloutPodContentRichTextNode implements Node & RichText {
        id: ID!
        json: JSON
    }
    type contentfulQuotePodRichTextContentRichTextNode implements Node & RichText {
        id: ID!
        json: JSON
    }
    type contentfulRoyalPersonPodBioRichTextRichTextNode implements Node & RichText {
        id: ID!
        json: JSON
    }
    interface ImageContainer {
        image: ContentfulAsset
    }
    type ContentfulImagePod implements Node & ImageContainer {
        image: ContentfulAsset
    }
    type ContentfulHeroPod implements Node & ImageContainer {
        image: ContentfulAsset
        richTextContent: RichText
    }
    type ContentfulRoyalPersonPod implements Node & ImageContainer {
        image: ContentfulAsset
    }
  `
  createTypes(typeDefs)
}
