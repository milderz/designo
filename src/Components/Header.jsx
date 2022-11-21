import { useState } from "react"
import MobileBtn from "./MobileBtn"
import { StyledHeader, StyledNavlinks } from "./Styles/Header.styled"
import { Link } from 'react-router-dom'


const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false)

  const handleCloseNavOnClick = () => {
    setMobileMenu(!mobileMenu)
  }

 const handleOnClick = () => {
  setMobileMenu(!mobileMenu)
 }
  return (
    <StyledHeader>
      <Link to="/">
     <img src="/assets/shared/desktop/logo-dark.png" alt="" srcSet="" />
      </Link>


      
     <StyledNavlinks mobileMenu={mobileMenu}>
      <ul>
       <li><Link to="/our-company" onClick={handleCloseNavOnClick}>OUR COMPANY</Link></li>
       <li><Link to="/locations" onClick={handleCloseNavOnClick}>LOCATIONS</Link></li>
       <li><Link to="/contact" onClick={handleCloseNavOnClick}>CONTACT</Link></li>
      </ul>
     </StyledNavlinks>
     <MobileBtn mobileMenu={mobileMenu} handleOnClick={handleOnClick} />
      
    </StyledHeader>
  )
}

export default Header
