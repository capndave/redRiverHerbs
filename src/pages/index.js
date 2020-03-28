import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'
import BackgroundImage from 'gatsby-background-image'

const IndexPage = function () {

    const image = useStaticQuery(graphql`
    query MyQuery {
        file(relativePath: { eq: "rocks-medium.jpg" }) {
            childImageSharp {
              fluid(quality: 80, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
    }
  `)

    const imageData = image.file.childImageSharp.fluid

    return (
        <BackgroundImage
            Tag="section"
            fluid={imageData}
        >
            <Layout 
              titleColor="white"
            />
        </BackgroundImage>
    )
}

export default IndexPage