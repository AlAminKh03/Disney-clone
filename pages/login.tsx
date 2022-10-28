import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import SignUp from '../components/signup'


 const Login=() =>{
  const {data:session,status}= useSession()
  const router =useRouter()
  useEffect(() => {
    if(session){
      router.push({
        pathname: '/'
      })}
    return () => {
    }
  }, [])
  if(status ==="loading")return(<p>Loading....</p>)
  if (!session)
  return (
<>
<SignUp/>
</>
  )
}

export default Login