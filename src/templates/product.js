import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        contentfulProduct(slug: {eq: $slug}) {
            name
            description {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`

const Product = function (props) {
    console.log(props.data.contentfulProduct.description)
    return (
        <Layout>
            <h1>{props.data.contentfulProduct.name}</h1>
            <div
              dangerouslySetInnerHTML={{
                  __html: props.data.contentfulProduct.description.childMarkdownRemark.html
              }}
            />
        </Layout>
    )
}

export default Product