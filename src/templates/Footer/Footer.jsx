import React from 'react'

// Images
import WPPCompany from '../../assets/images/wppcompany.png'

// Social Icon Media
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Linkedin from '../../assets/images/linkedin.png'

function Footer() {
    return (
        <footer className="footer">
            <img src={WPPCompany} alt="WPP Company" />
            <div className="footer-social-media">
                <span><img src={Facebook} alt="" /></span>
                <span><img src={Instagram} alt="" /></span>
                <span><img src={Linkedin} alt="" /></span>
            </div>
        </footer>
    )
}

export default Footer
