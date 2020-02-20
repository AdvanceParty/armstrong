const path = require(`path`)
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
