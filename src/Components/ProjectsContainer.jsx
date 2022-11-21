import React from 'react'
import ProjectCard from './ProjectCard'

import { StyledProjectsContainer } from './Styles/ProjectsContainer.styled'

const ProjectsContainer = ({ projects }) => {


  return (
    <StyledProjectsContainer>
      {projects.map((project) => (<ProjectCard title={project.title} text={project.text} bg={[project.bg]}></ProjectCard>))}
    </StyledProjectsContainer>
  )
}

export default ProjectsContainer
