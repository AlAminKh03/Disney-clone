import React from 'react'
import Input from './input'
import { Container, CTA, Description, DisneyLogo, Headline } from './styles'



 const SignUp=() =>{
  
  const image ='https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original'
  return (
    <Container>
        <CTA>
            <DisneyLogo src={image}
             alt="Disney logo" 
             loading="lazy"/>
            <Headline>+More than you would ever imagine</Headline>
            <Input/>
            <Description>Enter your email to create or restart your subscription</Description>
            <Description>Get 12 months for the for price of 10 when you</Description>
        </CTA>
    </Container>
  )
}
export default SignUp