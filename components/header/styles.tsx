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

export const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:25px;
pading:18px 0px 0px 0px;
align-items:center;
span{
    font-size:13px;
    position:relative;
    letter-spacing:1.42px;
    text-decoration:none;
}
&:after{
    content:'';
    background:${(props)=>props.theme.white};
    position:absolute;
    left:0;
    right:0;
    bottom:-6px;
    opacity:0;
    tarnsform:scalex(0);
    tarnsition:all 250ms cubic-bezier(0.25, 0.45, 0.46, 0.94) 0s;
    tarnsform-origin:left center;
}
img{
    height:20px;
    z-index:auto;
}
a{
    display:flex;
    align-items:center;
    padding:0px 12px;
    cursor:pointer;

}
&:hover{
    span:after{
        transform:scalex(1);
        opacity:1
    }
}
@media (max-width: 768px){
    display:none;
}

`

export const UserImg=styled.img`
height:100%
`

export const Dropdown=styled.div`
postion:fixed;
top:25px;
right:15px;
background: ${props=>props.theme.darkGray};
border-radius:4px;
padding:10px;
font-size:14px;
letter-spacing:3px;
width:100%;
opacity:0;

`
export const SignOut =styled.div`
position:relative;
display:flex;
height:48px;
weight:48px;
align-items:center;
justify-content:center;
cursor:pointer;
${UserImg}{
    height:100%;
    width:100%;
    border-radius:50%
}
&:hover{
    ${Dropdown}{
        opacity:1;
        transition-duration:1s
    }

`

