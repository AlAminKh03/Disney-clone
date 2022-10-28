import NextAuth from "next-auth"
import GoogleProvider  from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "468046331844-lrjsgrecal3ujor3g4ttoapnie6etqb6.apps.googleusercontent.com",
      clientSecret:"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"
    })
  ],
callbacks:{
  async redirect({url}:{url:any}){
    if(url.includes('/login'))return '/'
    if(!url.includes('/'))return '/login'
return url;
  }
}
}

export default NextAuth(authOptions)