import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        contentfulProduct(slug: {eq: $slug}) {
            ingredients
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

    const ingredients = data.ingredients ?
        (<div>
            <b>Ingredients: </b>
            {data.ingredients.join(', ')}
        </div>): null

    const packages = (data.packages !== undefined) ?
        data.packages.map(pkg => {
            return (
                <div className={pkg.available ? '' : 'text-decoration-line-through'}>
                    {pkg.ounces} oz. {pkg.type}: ${pkg.cost}
                </div>
            )
        }) :
        null

    return (
        <Layout>
            <h1>{data.name}</h1>
            {packages}
            <div
                dangerouslySetInnerHTML={{
                    __html: data.description.childMarkdownRemark.html
                }}
            />
            {ingredients}
        </Layout>
    )
}

export default Product