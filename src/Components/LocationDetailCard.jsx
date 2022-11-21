import { StyledLocationDetailCard } from "./Styles/LocationDetailCard.styled"

const LocationDetailCard = ({ location, office, addressLine1, addressLine2, phoneContact, mailContact, locationImage, versionPrimary}) => {

  return (
    <StyledLocationDetailCard locationImage={locationImage} versionPrimary={versionPrimary}>
      <div className="text-content">
       <h4>{location}</h4>
      <div className="location-details">
       <div className="address">
        <p>{office}</p>
        <p>{addressLine1}</p>
        <p>{addressLine2}</p>
       </div>

       <div className="contact">
        <p>Contact</p>
        <p>{phoneContact}</p>
        <p>{mailContact}</p>
       </div>
      </div>
      </div>
      <div className="location-img">
        
      </div>
    </StyledLocationDetailCard>
  )
}

export default LocationDetailCard
