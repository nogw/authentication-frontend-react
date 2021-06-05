import { createContext, useState } from "react";

type TypeUser = {
  // name: String,
  // email: String,
  token: String
}

type TypeAuthContext = {
  user: TypeUser
  setUser: any
}

export const AuthContext = createContext({} as TypeAuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<TypeUser | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}