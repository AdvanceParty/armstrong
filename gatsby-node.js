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

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  // const typeDefs = [...richTextDefs, ...imageContDefs].join("\n")
  const typeDefs = []
  // typeDefs.push(
  //   schema.buildObjectType({
  //     name: "Previewable",
  //     fields: {
  //       title: "String!",
  //       description: "String!",
  //       thumbnail: {
  //         type: "ContentfulAsset",
  //         resolve: source => {
  //           let asset
  //           // if (source.hero && source.hero.image) {
  //           //   asset = source.here.image
  //           // }
  //           // // } else if (source.pods) {

  //           // // }
  //           return asset
  //         },
  //       },
  //     },
  //     interfaces: ["Node"],
  //   })
  // )

  typeDefs.push(`
    interface RichText {
        id: ID!
        json: JSON
    }
    interface ImageContainer {
        image: ContentfulAsset
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
  `)
  createTypes(typeDefs)
}

// interface Previewable {
//   title: String
//   description: String
//   thumbnail: ContentfulAsset
//   slug: String
//   hero: ContentfulHeroPod
// }

// type ContentfulVine implements Node & Previewable {
//   title: String
//   description: String
//   slug: String
//   thumbnail: ContentfulAsset
//   hero: ContentfulHeroPod
// }
