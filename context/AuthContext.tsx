import Router from "next/router";
import { destroyCookie, parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";
import { TypeAuthContext, TypeUser } from '../types/loginTypes'

export const AuthContext = createContext({} as TypeAuthContext)

const logOutAccount = () => {
  destroyCookie(null, 'next.auth.app.v1')
  Router.push("/login")
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<TypeUser | null>(null)
  const { 'next.auth.app.v1': token } = parseCookies()

  useEffect(() => {
    if (token) {
      setUser({ token: token })
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{ user, setUser, logOutAccount }}>
      {children}
    </AuthContext.Provider>
  )
}