import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.css'

const Header = function () {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link
                  className={headerStyles.title}
                  to='/'>
                  
                    Red River Herbs
                </Link>
            </h1>
            <div>
                <Link className={headerStyles.link} to='/about'>About</Link>
                <Link className={headerStyles.link} to='/about'>Products</Link>
                <Link className={headerStyles.link} to='/contact'>Contact</Link>
            </div>
        </header>
    )
}

export default Header