import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.css'
import layoutStyles from './layout.module.css'

const Layout = function (props) {
  return (
    <div
      className={layoutStyles.container}
      style={{
        '--opacity': `${props.headerTheme === 'dark' ? '.5' : '1'}`,
        '--color': `${props.headerTheme === 'dark' ? 'var(--dark-color)' : 'var(--light-color)'}`
      }}
    >
      <div className={layoutStyles.content}>
        <Header/>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout