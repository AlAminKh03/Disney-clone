import styled from "styled-components";

export const Container= styled.div`
display: flex;
position: relative;
align-items:center;
justify-content:left;
@media (max-width:650px){
    flex-direction: column;
}
`
export const EmailInput= styled.input`
background-color:${(props)=>props.theme.darkGray};
border:${(props)=>props.theme.darkGray};
color:${(props)=>props.theme.white};
border-radius:0px;
width:100%;
padding:18px;
flex:0.8;
@media (max-width:650px){
    border-radius:5px;
    margin-bottom:5px;

`

export const SignupLink = styled.a`
width:100%;
background-color: ${(props)=>props.theme.lightBlue};
padding:15px;
font-weight:bold;
text-align:center;
color:${(props)=>props.theme.white};
cursor:pointer;
transition:all 250ms;
flex:0.3;

&:hover{
   background-color:#0483ee;
}
@media (max-width:650px){
    border-radius:5px;
}
`