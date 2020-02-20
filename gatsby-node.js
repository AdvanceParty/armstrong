const path = require(`path`)

// Generate pages at compile time
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve("./src/templates/article.js")
  const result = await graphql(`
    query {
      allContentfulArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulArticle.edges.forEach(article => {
    createPage({
      path: `/articles/${article.node.slug}/`,
      component: articleTemplate,
      context: {
        slug: article.node.slug,
      },
    })
  })
}

// customise schema for more direct queries and JSON formats
// exports.sourceNodes = ({actions}) => {
//   const {createTypes} = actions;
//   const typeDefs = `
//     interface ImageNode implements ContentfulAsset {

//     }

//     type
//   `
// }
