import React from 'react'
import footerStyles from './footer.module.css'

const Footer = function () {
    return (
        <footer
            className={footerStyles.footer} 
        >
            <p>
                Site by&nbsp;
               <a
                    className={footerStyles.link}
                    href='https://www.davethompsonisme.com'
                >Dave
               </a>
            </p>
        </footer>
    )
}

export default Footer