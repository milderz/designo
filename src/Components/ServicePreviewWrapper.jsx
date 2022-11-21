import React from 'react'
import { StyledServicePreviewWrapper } from './Styles/ServicePreviewWrapper.styled'
import ProjectPreviewCard from './ProjectPreviewCard'

const ServicePreviewWrapper = ({ web, app, graphic }) => {
  return (
    <StyledServicePreviewWrapper>
     {web && (<>
     <ProjectPreviewCard

                    title="APP DESIGN"
                    bg="/assets/home/desktop/image-app-design.jpg"
                    path="/app-design"
                  />
     <ProjectPreviewCard

                    title="GRAPHIC DESIGN"
                    bg="/assets/home/desktop/image-graphic-design.jpg"
                    path="/graphic-design"
                  />
     </>)}
     {app && (<>
     <ProjectPreviewCard

                    title="WEB DESIGN"
                    bg="/assets/home/desktop/image-web-design-large.jpg"
                    path="/web-design"
                  />
     <ProjectPreviewCard

                    title="GRAPHIC DESIGN"
                    bg="/assets/home/desktop/image-graphic-design.jpg"
                    path="/graphic-design"
                  />
     </>)}
     {graphic && (<>
     <ProjectPreviewCard

                    title="APP DESIGN"
                    bg="/assets/home/desktop/image-app-design.jpg"
                    path="/app-design"
                  />
     <ProjectPreviewCard

                    title="WEB DESIGN"
                    bg="/assets/home/desktop/image-web-design-large.jpg"
                    path="/web-design"
                  />
     </>)}
     
      
    </StyledServicePreviewWrapper>
  )
}

export default ServicePreviewWrapper
