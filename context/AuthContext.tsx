import Router from "next/router";
import { destroyCookie, parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";

type TypeUser = {
  // name: String,
  // email: String,
  token: String
}

type TypeAuthContext = {
  user: TypeUser
  setUser: any
  logOutAccount: () => void
}

export const AuthContext = createContext({} as TypeAuthContext)

const logOutAccount = () => {
  destroyCookie(null, 'next.auth.app.v1')
  Router.push("/login")
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<TypeUser | null>(null)
  const { 'next.auth.app.v1': token } = parseCookies()

  return (
    <AuthContext.Provider value={{ user, setUser, logOutAccount }}>
      {children}
    </AuthContext.Provider>
  )
}