import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = function () {

    const aboutData = useStaticQuery(graphql`
        query ContentfulAboutQuery {
            allContentfulAbout {
                edges {
                  node {
                    about {
                      childMarkdownRemark {
                        html
                      }
                    }
                  }
                }
              }
            }
        `)

    const aboutText = aboutData.allContentfulAbout.edges[0].node.about.childMarkdownRemark.html

    return (
        <Layout>
            <div
                dangerouslySetInnerHTML={{
                    __html: aboutText
                }}
            />
        </Layout>
    )
}

export default AboutPage