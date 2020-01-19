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
            <div className={headerStyles.navList}>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/products'>Products</Link>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link>
            </div>
        </header>
    )
}

export default Header