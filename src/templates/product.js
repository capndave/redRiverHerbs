import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        contentfulProduct(slug: {eq: $slug}) {
            name
            packages {
                available
                ounces
                cost
                type
            }
            description {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`

const Product = function (props) {

    const data = props.data.contentfulProduct

    const packages = data.packages.map(pkg => {
        return (
            <div className={ pkg.available ? '' : 'text-decoration-line-through' }>
                { pkg.ounces } oz. { pkg.type }: ${ pkg.cost }
            </div>
        )
    })

    return (
        <Layout>
            <h1>{data.name}</h1>
            { packages }
            <div
              dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html
              }}
            />
        </Layout>
    )
}

export default Product