import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import orderStyles from './order.module.css'

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
            <div
                className={orderStyles.order}
                dangerouslySetInnerHTML={{
                    __html: contactText
                }}
            />
        </Layout>
    )
}

export default ContactPage