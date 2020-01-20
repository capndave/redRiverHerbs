import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = function () {
    return (
        <Layout>
            <h1 className='text-align-center'>Contact Me</h1>
            <p>Some contact info</p>
            <ul>
                <li>
                    <Link to='https://www.instagram.com/redriver.herbs/'>Instagram</Link>
                </li>
            </ul>
        </Layout>
    )
}

export default ContactPage