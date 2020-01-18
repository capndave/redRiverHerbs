import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = function(props) {
    return (
        <div>
            <Header/>
            { props.children }
            <Footer/>
        </div>
    )
}

export default Layout