import { Container, Checkbox } from './styles';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IInputsSignIn } from '../../types/loginTypes';
import axios from 'axios';
import { api } from '../../services/api';
import NProgress from 'nprogress';

function SignInComponent({ setMenuNow }) {
  const initialInputsValues: IInputsSignIn = {
    signInEmail: "",
    signInPassword: "",
  }

  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false)
  const [inputsValues, setInputsValues] = useState(initialInputsValues)
  const [checked, setChecked] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputsValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSignIn = () => {
    NProgress.start()

    api.post("/login", {
      email: inputsValues.signInEmail,
      password: inputsValues.signInPassword,
    })
    .then((response) => {
      NProgress.done()
      console.log(response.data)
    })
    .catch((error) => {
      NProgress.done()
      console.log(error)
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
        className="input"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <input name="signInEmail" onChange={handleChange} value={inputsValues.signInEmail} spellCheck="false" type="text" placeholder="Email"/>
      </motion.div>
      <motion.div 
        className="input password"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input type={passwordVisible ? "text" : "password"} name="signInPassword" onChange={handleChange} value={inputsValues.signInPassword} spellCheck="false" placeholder="Password"/>
        {
          passwordVisible ? (
            <AiOutlineEye onClick={() => setPasswordVisible(!passwordVisible)} className="eye"/>
          ) : (
            <AiOutlineEyeInvisible onClick={() => setPasswordVisible(!passwordVisible)} className="eye"/>
          )
        }
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
