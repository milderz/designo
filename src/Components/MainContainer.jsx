import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import { StyledMainContainer } from "./Styles/MainContainer.styled";

const MainContainer = ({ version }) => {
  return (
    <StyledMainContainer >
      

      <h2> Award-winning custom designs and digital branding solutions</h2> 
      <p>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <PrimaryBtn btnText='LEARN MORE' version="white" path="/our-company"/>
     
      
        <img src="/assets/home/desktop/image-hero-phone.png" alt="designo-phone-protfolio" srcSet="" />
      
      
    </StyledMainContainer>
  );
};

export default MainContainer;
