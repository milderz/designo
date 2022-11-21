import React from 'react'
import PrimaryBtn from './PrimaryBtn'
import { StyledLocationCard } from './Styles/LocationCard.styled'

const LocationCard = ({img, country, path}) => {
  return (
    <StyledLocationCard>
     <div className="location-img">

      <img className='small-circle' src="/assets/shared/desktop/bg-pattern-small-circle.svg" alt="" srcSet="" />
      <img src={img} alt="city-location" srcSet="" />
     </div>
     <p className="location-name">{country}</p>
     <PrimaryBtn btnText="SEE LOCATION" path={path}/>
    </StyledLocationCard>
  )
}

export default LocationCard
