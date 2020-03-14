import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = function () {

    const contactData = useStaticQuery(graphql`
        query ContentfulContactQuery {
            allContentfulContact {
                edges {
                  node {
                    contact {
                      childMarkdownRemark {
                        html
                      }
                    }
                  }
                }
              }
            }
        `)

    const contactText = contactData.allContentfulContact.edges[0].node.contact.childMarkdownRemark.html

    return (
        <Layout>
            <h1 className='text-align-center'>Contact Me</h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: contactText
                }}
            />
        </Layout>
    )
}

export default ContactPage