import React from 'react'
import {Session } from 'next-auth'

interface Props  {
    session:Session
}

 const SignedInHeader=({session}: Props)=> {
  return (
    <div>SignedInHeader</div>
  )
}
export default SignedInHeader