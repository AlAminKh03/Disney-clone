import React from 'react'
import {Session } from 'next-auth'
import {signOut} from 'next-auth/react'
import {Dropdown, NavMenu, SignOut, UserImg} from './styles'

interface Props  {
    session:Session
}

 const SignedInHeader=({session}: Props)=> {
  console.log(session)
  const image= session?.user?.image as string
  console.log(image);
const name= session?.user?.name as string
  return (
    <>
   <NavMenu>
    <a>
      <img src="/images/home-icon.png" alt="Home icon" />
      <span>Home</span>
    </a>
    <a>
      <img src="/images/search-icon.png" alt="search icon" />
      <span>Search</span>
    </a>
    <a>
      <img src="/images/watchlist-icon.png" alt="watchlist icon" />
      <span>Watchlist</span>
    </a>
    <a>
      <img src="/images/movie-icon.png" alt="movie icon" />
      <span>Movies</span>
    </a>
    <a>
      <img src="/images/original-icon.png" alt="original icon" />
      <span>Originls</span>
    </a>
   </NavMenu>
   <SignOut>
{session!==null?<UserImg src={image} alt={name}>
</UserImg> : null}
<Dropdown>
  <span onClick={()=>{signOut()}}>SignOut</span>
</Dropdown>
   </SignOut>
   </>
  )
}
export default SignedInHeader