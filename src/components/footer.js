import React from 'react'
import footerStyles from './footer.module.css'

const Footer = function () {
    return (
        <footer
            className={footerStyles.footer} 
        >
            <p>
                <span
                  className={footerStyles.semiTransparent}
                >
                Site by&nbsp;
                </span>
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