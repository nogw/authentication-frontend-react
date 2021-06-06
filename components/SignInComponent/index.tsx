import { motion } from 'framer-motion'
import { useContext, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import NProgress from 'nprogress';
import nookies from 'nookies'

import { Container, Checkbox } from './styles';
import { IInputsSignIn, IErrors } from '../../types/loginTypes';
import { api } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import Router from 'next/router';

function SignInComponent({ setMenuNow }) {
  const initialErrors: IErrors = {
    email: "",
    password: "",
  }

  const initialInputsValues: IInputsSignIn = {
    email: "",
    password: "",
  }

  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false)
  const [inputsValues, setInputsValues] = useState(initialInputsValues)
  const [checked, setChecked] = useState(true)
  const { setUser } = useContext(AuthContext)
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

  const handleSignIn = () => {
    NProgress.start()

    api.post("/login", {
      email: inputsValues.email,
      password: inputsValues.password,
    })
    .then((response) => {
      NProgress.done()

      setUser({ token: response.data.token })

      nookies.set(undefined, 'next.auth.app.v1', response.data.token, {
        maxAge: 60 * 60 * 24,
        path: '/'
      })

      Router.push("/dashboard")
    })
    .catch((error) => {
      NProgress.done()
      setErrors(error.response.data)
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
        Sign in
      </motion.h1>
    
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
        className="options"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Checkbox>
          <label className="b-contain">
            <span>Remember me</span>
            <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
            <div className="b-input"/>
          </label>
        </Checkbox>
        <div className="forgetpassword">
          <a onClick={() => setMenuNow('forgetpassword')}>Forget Password?</a>
        </div>
      </motion.div>

      <motion.div 
        className="btnwithcolor"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button onClick={handleSignIn}>Sign in</button>
      </motion.div>

      <motion.div 
        className="buttons2create"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <button className="btnwithoutcolor" onClick={() => setMenuNow('qrcode')}>Qr code sign in</button>
        <button className="btnwithoutcolor" onClick={() => setMenuNow('register')}>Sign up</button>
      </motion.div>
    </Container>
  );
};

export default SignInComponent;
