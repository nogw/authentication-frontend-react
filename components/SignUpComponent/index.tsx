import { Container } from './styles';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IErrorsSignUp, IInputsSignUp } from '../../types/loginTypes';
import { api } from '../../services/api';
import NProgress from 'nprogress';

function SignUpComponent({ setMenuNow }) {
  const initialErrors: IErrorsSignUp = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }

  const initialInputsValues: IInputsSignUp = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  }

  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false)
  const [inputsValues, setInputsValues] = useState(initialInputsValues)
  const [errors, setErrors] = useState(initialErrors)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    value.length < 1 ? (
      setErrors(prev => ({ ...prev, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` }))
    ) : (                            
      setErrors(prev => ({ ...prev, [name]: "" }))
    )
    
    setInputsValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSignUp = () => {
    NProgress.start()
    
    api.post("/register", {
      name: inputsValues.name,
      email: inputsValues.email,
      password: inputsValues.password,
      passwordConfirm: inputsValues.passwordConfirm,
    })
    .then((response) => {
      NProgress.done()
      console.log(response.data)
    })
    .catch((error) => {
      NProgress.done()
      console.log(error.response.data.error)
      setErrors(error.response.data.error)
    })
  }

  return (
    <Container>
      <motion.h1 
        className="sign"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        Sign up
      </motion.h1>
    
      <motion.div 
        className={`input ${errors.name && "error"}`}
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <input name="name" onChange={handleChange} value={inputsValues.name} spellCheck="false" type="text" placeholder="Name"/>
        <p className="errorMessage">
          {
            errors.name
          }
        </p>
      </motion.div>
    
      <motion.div 
        className={`input ${errors.email && "error"}`}
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <input name="email" onChange={handleChange} value={inputsValues.email} spellCheck="false" type="text" placeholder="Email"/>
        <p className="errorMessage">
          {
            errors.email
          }
        </p>
      </motion.div>

      <motion.div 
        className={`input password ${errors.password && "error"}`}
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input type={passwordVisible ? "text" : "password"} name="password" onChange={handleChange} value={inputsValues.password} spellCheck="false" placeholder="Password"/>
        {
          passwordVisible ? (
            <AiOutlineEye onClick={() => setPasswordVisible(!passwordVisible)} className="eye"/>
          ) : (
            <AiOutlineEyeInvisible onClick={() => setPasswordVisible(!passwordVisible)} className="eye"/>
          )
        }
        <p className="errorMessage">
          {
            errors.password
          }
        </p>
      </motion.div>

      <motion.div 
        className={`input password ${errors.passwordConfirm && "error"}`}
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input type={passwordConfirmVisible ? "text" : "password"} name="passwordConfirm" onChange={handleChange} value={inputsValues.passwordConfirm} spellCheck="false" placeholder="Confirm Password"/>
        {
          passwordConfirmVisible ? (
            <AiOutlineEye onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)} className="eye"/>
          ) : (
            <AiOutlineEyeInvisible onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)} className="eye"/>
          )
        }
        <p className="errorMessage">
          {
            errors.passwordConfirm
          }
        </p>
      </motion.div>

      <motion.div 
        className="btnwithcolor"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button onClick={handleSignUp}>Sign up</button>
      </motion.div>

      <motion.div 
        style={{ marginTop: "12px" }}
        className="buttons2create"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <button className="btnwithoutcolor" onClick={() => setMenuNow('login')}>Back sign in</button>
      </motion.div>
    </Container>
  );
};

export default SignUpComponent;
