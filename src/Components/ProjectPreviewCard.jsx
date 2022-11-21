import { StyledProjectPreviewCard } from "./Styles/ProjectPreviewCard.styled"
import { Link } from "react-router-dom"


const ProjectPreviewCard = ({ gridArea, title, bg, path}) => {
  return (
    <StyledProjectPreviewCard gridArea={gridArea} bg={bg} >

     <h3>{title}</h3>
     <Link to={path}>VIEW PROJECTS</Link>
      
    </StyledProjectPreviewCard>
  )
}

export default ProjectPreviewCard
