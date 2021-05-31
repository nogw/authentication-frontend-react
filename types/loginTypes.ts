export interface IInputsSignIn {
  signInEmail: string,
  signInPassword: string,
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