import React from 'react'
import { Container, EmailInput, SignupLink } from './styles';
import {signIn} from "next-auth/react"


const Input=() =>{
  return (
    <Container>
<EmailInput placeholder='Email'>

</EmailInput>

<SignupLink onClick={()=>signIn()}>
Continue
</SignupLink>
    </Container>
  )
}

export default Input;

