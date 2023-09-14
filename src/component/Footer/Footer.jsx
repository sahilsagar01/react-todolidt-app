import React from 'react'
import "./Footer.css"

function Footer() {

    const d = new Date();
    const year = d.getFullYear();


  return (
    <div className='footer'>
        <div className='footer_copyright'>
            <h3>All rights reserved.</h3>
            <p>© Sahil Kumar {year}</p>
        </div>
    </div>
  )
}

export default Footer;