import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
      GoogleProvider({
          clientId: "1089504717182-1mci3gp0947qtccf7gj7v5aqfa2lssac.apps.googleusercontent.com",
          clientSecret: "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",
        })
  ]
})
export { handler as GET, handler as POST }