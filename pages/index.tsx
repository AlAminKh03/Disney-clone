import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"


export default function Home() {
  const {data:session,status}= useSession()
  const router =useRouter()
  useEffect(() => {
    if(!session){
      router.push({
        pathname: '/login'
      })}
    return () => {
    }
  }, [])
  if(status ==="loading")return(<p>Loading....</p>)
  if (session)
  return (
   <>
   Disney Clone
   </>
  )
}
