import { StyledLocationsContainer } from "./Styles/LocationsContainer.styled"
import LocationDetailCard from './LocationDetailCard'

const LocationsContainer = () => {

  const locations = [
   { location: "Canada",  office: "Designo Central Office", addressLine1: "3886 Wellington Street", addressLine2: "Toronto, Ontario M9C 3J5", phoneContact: "P : +1 253-863-8967", mailContact: "M : contact@designo.co", locationImage: "assets/locations/desktop/image-map-canada.png", versionPrimary: true},
   { location: "Australia",  office: "Designo AU Office", addressLine1: "19 Balonne Street", addressLine2: "New South Wales 2443", phoneContact: "P : (02) 6720 9092", mailContact: "M : contact@designo.au", locationImage: "assets/locations/desktop/image-map-australia.png", versionPrimary: false},
   { location: "United Kingdom",  office: "Designo UK Office", addressLine1: "13 Colorado Way", addressLine2: "Rhyd-y-fro SA8 9GA", phoneContact: "P : 078 3115 1400", mailContact: "M : contact@designo.co", locationImage: "assets/locations/desktop/image-map-united-kingdom.png", versionPrimary: true},
  ]
  return (
    <StyledLocationsContainer>
     { locations.map((location) => ( <LocationDetailCard key={location.phoneContact} location={location.location} office={location.office} addressLine1={location.addressLine1} addressLine2={location.addressLine2} phoneContact={location.phoneContact} mailContact={location.mailContact} locationImage={location.locationImage} versionPrimary={location.versionPrimary}/>))}
    
      
    </StyledLocationsContainer>
  )
}

export default LocationsContainer
