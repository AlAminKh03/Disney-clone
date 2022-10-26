import styled from "styled-components";



export const Nav = styled.nav`
height:70px;
display:flex;
background:#090b13;
align-items:center;
color:${(props)=>props.theme.white};
padding:0px 36px;
justify-content:space-between;
overflow:hidden;
z-index:3;
`

export const Logo=styled.img`
width:80px ;
cursor:pointer;
`

export const LoginContainer=styled.div`
flex:1;
display:flex;
justify-content:flex-end;
`

export const Login = styled.div`
align-items:center;
border:1px solid #f9f9f9;
padding:8px 16px;
border-radius:4px;
letter-spacing:1.5px;
text-transform:uppercase;
background-color:rgba(0,0,0,0.5);
transition:all 0.2s ease 0s;
cursor:pointer;
&:hover {
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
}
`