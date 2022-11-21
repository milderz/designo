import React from 'react'
import { StyledTenetsCard } from './Styles/TentetsCard.styled'

const TenetsCard = ({ img, title, text}) => {
  return (
    <StyledTenetsCard>
     <img src={img} alt="tenets-card" srcSet="" />
     <div className="text-container">
   <h4>{title}</h4>
     <p>{text}</p>
     </div>
     
      
    </StyledTenetsCard>
  )
}

export default TenetsCard
