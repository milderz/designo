import { StyledContactBanner } from "./Styles/ContactBanner.styled"
import PrimaryBtn from './PrimaryBtn'


const ContactBanner = () => {
  return (
    <StyledContactBanner>
     <div className="contact-banner-text">
      <h3>Let’s talk about your project</h3>
      <p> Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow. </p>
     </div>
     <PrimaryBtn btnText='GET IN TOUCH' version="white" path="/contact"/>
      
    </StyledContactBanner>
  )
}

export default ContactBanner
