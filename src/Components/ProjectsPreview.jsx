import React from 'react'
import { StyledProjectsPreview } from './Styles/ProjectsPreview.styled'
import ProjectPreviewCard from "./ProjectPreviewCard";

const ProjectsPreview = () => {
  return (
    <StyledProjectsPreview>
      <ProjectPreviewCard
                    gridArea="1 / 1 / 3 / 2"
                    title="WEB DESIGN"
                    bg="/assets/home/desktop/image-web-design-large.jpg"
                    path="/web-design"
                  />
                  <ProjectPreviewCard
                    gridArea="1 / 2 / 2 / 3"
                    title="APP DESIGN"
                    bg="/assets/home/desktop/image-app-design.jpg"
                    path="/app-design"
                  />
                  <ProjectPreviewCard
                    gridArea="2 / 2 / 3 / 3"
                    title="GRAPHIC DESIGN"
                    bg="/assets/home/desktop/image-graphic-design.jpg"
                    path="/graphic-design"
                  />
    </StyledProjectsPreview>
  )
}

export default ProjectsPreview
