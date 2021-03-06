export interface IInputsSignIn {
  email: string,
  password: string,
}

export interface IInputsSignUp {
  name: string,
  email: string,
  password: string,
  passwordConfirm: string,
}

export interface IInputsResetPassword {
  password: string,
  passwordConfirm: string
}

export interface IErrors {
  email: string,
  password: string
}

export interface IErrorsSignUp {
  name: string,
  email: string,
  password: string,
  passwordConfirm: string,
}

export interface TypeUser {
  // name: String,
  // email: String,
  token: String
}

export interface TypeAuthContext {
  user: TypeUser
  setUser: any
  logOutAccount: () => void
}