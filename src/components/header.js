import React from 'react'
import { Link } from 'gatsby'

const Header = function() {
    return (
        <header>
            <h1>Red River Herbs</h1>
            <div>
                <Link to='/about'>About</Link>
                <Link to='/about'>Products</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </header>
    )
}

export default Header