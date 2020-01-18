import React from 'react'
import { Link } from 'gatsby'

const ContactPage = function () {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>Some contact info</p>
            <ul>
                <li>
                    <Link to='https://www.instagram.com/redriver.herbs/'>Instagram</Link>
                </li>
            </ul>
        </div>
    )
}

export default ContactPage