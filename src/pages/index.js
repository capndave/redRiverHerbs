import React from 'react'
import { Link } from 'gatsby'

const IndexPage = function() {
    return (
        <div>
            <h1>Hi</h1>
            <h2>My name is dave</h2>
            <p>Need a developer? <Link to='/contact'>contact me.</Link></p>
        </div>
    )
}

export default IndexPage