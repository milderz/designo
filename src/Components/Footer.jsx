import React from 'react'
import { Link } from 'react-router-dom'
import { StyledFooter } from './Styles/Footer.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faYoutube, faTwitter, faPinterest, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ offset }) => {
  return (
    <StyledFooter offset={offset}>
     
     
      <div className="content">
       <header>
        <img src="/assets/shared/desktop/logo-light.png" alt="designo logo" srcSet="" />
        <nav>
         <ul>
          <li><Link to="/our-company">OUR COMPANY</Link></li>
          <li><Link to="/locations">LOCATIONS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
         </ul>
        </nav>
       </header>
       <div className="footer-info">
        <div className="address">
         <p>Designo Central Office</p>
         <p>3886 Wellington Street</p>
         <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="contact">
         <p>Contact Us (Central Office)</p>
         <p>P : +1 253-863-8967</p>
         <p>M : contact@designo.co</p>
        </div>
        <ul className='social-links'>
         <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a></li>
         <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/></a></li>
         <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
         <li><a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPinterest}/></a></li>
         <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
        </ul>
       </div>

      </div>
    </StyledFooter>
  )
}

export default Footer
