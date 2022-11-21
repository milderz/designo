import React from 'react'
import { StyledServiceHeader } from './Styles/ServiceHeader.styled'

const ServiceHeader = ({ service, text}) => {
  return (
    <StyledServiceHeader>
      <h3>{service}</h3>
      <p>{text}</p>
      
    </StyledServiceHeader>
  )
}

export default ServiceHeader
