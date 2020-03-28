import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.css'
import layoutStyles from './layout.module.css'

const Layout = function (props) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header
                  titleColor={props.titleColor}
                />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout