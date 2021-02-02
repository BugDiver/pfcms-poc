const { basename, resolve } = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const bookTemplate = resolve("./src/templates/book.js")

  const res = await graphql(`
    query {
      allContentfulBook {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBook.edges.forEach(edge => {
    createPage({
      component: bookTemplate,
      path: `/book/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
