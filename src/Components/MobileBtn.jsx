
import { StyledMobileBtn } from "./Styles/MobileBtn.styled"


const MobileBtn = ({ mobileMenu, handleOnClick}) => {

 
  return (
    <StyledMobileBtn onClick={handleOnClick}>
     <div className={`hamburger ${mobileMenu && "is-active"}`} id="hamburger-1">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
    </StyledMobileBtn>
  )
}

export default MobileBtn
