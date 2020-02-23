const path = require(`path`)

// Generate pages at compile time
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const vineTemplate = path.resolve("./src/templates/vine.js")
  const articleTemplate = path.resolve("./src/templates/article.js")
  const result = await graphql(`
    query {
      allContentfulVine {
        nodes {
          slug
          id
        }
      }
      allContentfulArticle {
        nodes {
          slug
          id
        }
      }
    }
  `)

  const { allContentfulArticle, allContentfulVine } = result.data
  const vines = allContentfulVine.nodes.map(item => ({
    ...item,
    component: vineTemplate,
  }))
  const articles = allContentfulArticle.nodes.map(item => ({
    ...item,
    component: articleTemplate,
  }))
  const pages = [...vines, ...articles]

  pages.forEach(page => {
    createPage({
      path: `/${page.slug}/`,
      component: `${page.component}`,
      context: {
        id: `${page.id}`,
      },
    })
  })
}

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     interface IndexedContent @nodeInterface {
//       id: ID!
//       slug: String!
//       title: String!
//       description: String!
//     }
//     type ContentfulVine implements Node & IndexedContent {
//       slug: String!
//       title: String!
//       description: String!
//     }
//   `
//   createTypes(typeDefs)
// }
