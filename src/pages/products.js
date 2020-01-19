import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import productsStyles from './products.module.css'

const ProductsPage = function () {

    const productsData = useStaticQuery(graphql`
        query ContentPageQuery {
            allContentfulProduct(sort: {fields: name, order: DESC}) {
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

    console.log(productsData)
    const products = productsData.allContentfulProduct.edges.map(edge => {
        return (
            <li className={productsStyles.product}>
                <Link to={`/product/${edge.node.slug}`}>
                    <h2>{edge.node.name}</h2>
                    <p>{edge.node.shortDescription}</p>
                </Link>
            </li>
        )
    })

    return (
        <Layout>
            <h1>Products</h1>
            <ol>
                {products}
            </ol>
            <p>Products will be here</p>
        </Layout>
    )
}

export default ProductsPage