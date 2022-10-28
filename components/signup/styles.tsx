import Image, { StaticImageData } from "next/image"
import styled from "styled-components"
import React from "react"
// import {ReactComponent as BackgroundImg} from '../../assests/img/background.jpg'



// export const StyledBackgroundImg =styled(BackgroundImg)`

// `

export const Container = styled.div`
display:flex;
position:relative;
background:url('/images/home-background.jpg');
height:100vh;
padding:5.3vw;
align-items:center;
`

export const CTA =styled.div`
max-width:546px;
padding:80px 40px;
width:90%;
display:flex;
flex-direction:column;
margin-top:100px;
align-items:flex-start;
@media(max-width:650px){
    width:100%;
    align-items:center;
}
`
export const DisneyLogo= styled.img`
width:50%;
@media (max-width:650px){
    width:100%;
}
`
export const Headline=styled.h1`
font-size:1.5rem;
text-align:left;
@media (max-width:650px){
    text-align:center;
}
`
export const Description= styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:left;
line-height:1.5;
@media (max-width:650px){
    text-align:center;
}
`