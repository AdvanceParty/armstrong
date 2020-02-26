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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
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
    type contentfulRoyalPersonPodBioRichTextNode implements Node & RichText {
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
    }
    type ContentfulRoyalPersonPod implements Node & ImageContainer {
        image: ContentfulAsset
    }
  `
  createTypes(typeDefs)
}
