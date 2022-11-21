import React from 'react'
import { StyledAboutCard } from './Styles/AboutCard.styled'

const AboutCard = ({ version, title, text1, text2, bgImg, bgImgMobile}) => {
  return (
    <StyledAboutCard version={version} bgImg={bgImg} bgImgMobile={bgImgMobile}>
     <div className="img-content"></div>
     <div className="text-content">
      <h3>{title}</h3>
      <p>{text1}</p>
      <p>{text2}</p>
     </div>
     
      
    </StyledAboutCard>
  )
}

export default AboutCard
