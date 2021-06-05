export interface IInputsSignIn {
  email: string,
  password: string,
}

export interface IInputsSignUp {
  signUpName: string,
  signUpEmail: string,
  signUpPassword: string,
  signUpPasswordConfirm: string,
}

export interface IInputsResetPassword {
  password: string,
  passwordConfirm: string
}

export interface IErrors {
  email: string,
  password: string
}