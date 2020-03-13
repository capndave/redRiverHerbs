const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    /* Redirect from root to products page immediately */

    const { createRedirect } = actions

    createRedirect({
      fromPath: `/`,
      toPath: `/products`,
      redirectInBrowser: true,
      isPermanent: true,
    })

    /* Generate (detail) pages for each product */

    const response = await graphql(`
      query {
          allContentfulProduct {
              edges {
                  node {
                      slug
                  }
              }
          }
      }
    `)

    const productTemplate = path.resolve('./src/templates/product.js')

    response.data.allContentfulProduct.edges.forEach(edge => {
        actions.createPage({
            component: productTemplate,
            path: `/product/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}