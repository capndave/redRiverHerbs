import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        contentfulProduct(slug: {eq: $slug}) {
            ingredients
            instructions {
                childMarkdownRemark {
                    html
                }
            }
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
        (<p>
            <p><b>Ingredients: </b></p>
            <span>
                {data.ingredients.join(', ')}
            </span>
        </p>) : null

    const instructions = data.instructions ?
        (<p>
            <b>Instructions: </b>
            <span
                dangerouslySetInnerHTML={{
                    __html: data.instructions.childMarkdownRemark.html
                }}
            />
        </p>) : null


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
            {instructions}
        </Layout>
    )
}

export default Product