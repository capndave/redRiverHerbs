import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        contentfulProduct(slug: {eq: $slug}) {
            name
            description {
                description
            }
        }
    }
`

const Product = function (props) {
    return (
        <Layout>
            <h1>{props.data.contentfulProduct.name}</h1>
            <p>{props.data.contentfulProduct.description.description}</p>
        </Layout>
    )
}

export default Product