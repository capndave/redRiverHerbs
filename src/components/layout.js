import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.css'
import layoutStyles from './layout.module.css'

const Layout = function ({children, headerTheme = 'dark'}) {
 
  return (
    <div
      className={layoutStyles.container}
      style={{
        '--opacity': `${headerTheme === 'dark' ? '.5' : '1'}`,
        '--color': `${headerTheme === 'dark' ? 'var(--dark-color)' : 'var(--light-color)'}`
      }}
    >
      <div className={layoutStyles.content}>
        <Header/>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout