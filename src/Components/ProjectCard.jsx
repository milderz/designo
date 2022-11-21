import React from 'react'
import { StyledProjectCard } from './Styles/ProjectCard.styled'

const ProjetcCard = ({title, text, bg}) => {
  return (
    <StyledProjectCard bg={bg}>
     <div className="thumbnail"></div>
     <div className="text-content">
      <h4>{title}</h4>
      <p>{text}</p>
     </div>
      
    </StyledProjectCard>
  )
}

export default ProjetcCard
