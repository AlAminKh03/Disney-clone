import React from 'react'
import { useSession,  } from "next-auth/react"
import { Login, LoginContainer, Logo, Nav } from './styles';
import SignedInHeader from './SignedInHeader';
import {signIn} from 'next-auth/react'

const Header =()=>{
    const{data:session,status}=useSession()
    const renderHeader=()=>{
        if(session) return <SignedInHeader session={session}></SignedInHeader>
        // doing some work based on user logedin or not 
        return(
            <LoginContainer>
                <Login onClick={()=>signIn()}>
                    login
                </Login>
            </LoginContainer>
        )
    }
    return(
        <Nav>
        <Logo 
        src={'https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original'}
        alt="Disney-logo" />
         {renderHeader()}
        </Nav>
       
    )
}

export default Header;