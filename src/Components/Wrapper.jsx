import React from 'react'
import { StyledWrapper } from './Styles/Wrapper.styled'
import LocationCard from './LocationCard'

const Wrapper = () => {
  return (
    <StyledWrapper>
      <LocationCard
                    img={"/assets/shared/desktop/illustration-canada.svg"}
                    country="CANADA"
                    path="/locations"
                  />
                  <LocationCard
                    img={"/assets/shared/desktop/illustration-australia.svg"}
                    country="AUSTRALIA"
                    path="/locations"
                  />
                  <LocationCard
                    img={
                      "/assets/shared/desktop/illustration-united-kingdom.svg"
                    }
                    country="UNITED KINGDOM"
                    path="/locations"
                  />
    </StyledWrapper>
  )
}

export default Wrapper
