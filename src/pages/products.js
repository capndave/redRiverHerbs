import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import productsStyles from './products.module.css'

const ProductsPage = function () {
    const productsData = useStaticQuery(graphql`
        query ContentPageQuery {
            allContentfulProduct(sort: {fields: name, order: ASC}) {
                edges {
                    node {
                        description {
                            description
                        }
                        name
                        packages {
                            available
                            cost
                            type
                            ounces
                        }
                        shortDescription
                        slug
                    }
                }
            }
        }
    `)

    const products = productsData.allContentfulProduct.edges.map((edge, i) => {
        return (
            <div
                className={productsStyles.product}
                key={i}
            >
                <Link
                  className={productsStyles.textDecorationNone}
                  to={`/product/${edge.node.slug}`}
                >
                    <h2 className={productsStyles.productTitle}>{edge.node.name}</h2>
                    <p className={productsStyles.productDescription}>{edge.node.shortDescription}</p>
                </Link>
            </div>
        )
    })

    return (
        <Layout>
            <h1 className='text-align-center'>Products</h1>
            <div className={productsStyles.products}>
                {products}
            </div>
        </Layout>
    )
}

export default ProductsPage