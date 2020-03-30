import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.css'

const Header = function ({ headerTheme = 'dark' }) {

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link
                    className={`${headerStyles[headerTheme]} ${headerStyles.title}`}
                    to='/'>
                    Red River Herbs
                </Link>
            </h1>
            <h3
                className={headerStyles.navList}
            >
                <Link
                    activeClassName={`${headerStyles.activeNavItem}`}
                    className={headerStyles.navItem}
                    to='/about'>
                    About
                </Link>
                <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to='/products'>
                    Products
                </Link>
                <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to='/order'>
                    Order
                </Link>
            </h3>
        </header>
    )
}

export default Header