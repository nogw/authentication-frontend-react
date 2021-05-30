import { Container } from './styles';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IInputsSignUp } from '../../types/loginTypes';
import { api } from '../../services/api';
import NProgress from 'nprogress';

function SignUpComponent({ setMenuNow }) {
  const initialInputsValues: IInputsSignUp = {
    signUpName: "",
    signUpEmail: "",
    signUpPassword: "",
    signUpPasswordConfirm: "",
  }

  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false)
  const [inputsValues, setInputsValues] = useState(initialInputsValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputsValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSignUp = () => {
    NProgress.start()
    
    api.post("/register", {
      name: inputsValues.signUpName,
      email: inputsValues.signUpEmail,
      password: inputsValues.signUpPassword,
      passwordConfirm: inputsValues.signUpPasswordConfirm,
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
        Sign up
      </motion.h1>
    
      <motion.div 
        className="input"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <input name="signUpName" onChange={handleChange} value={inputsValues.signUpName} spellCheck="false" type="text" placeholder="Name"/>
      </motion.div>
    
      <motion.div 
        className="input"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <input name="signUpEmail" onChange={handleChange} value={inputsValues.signUpEmail} spellCheck="false" type="text" placeholder="Email"/>
      </motion.div>

      <motion.div 
        className="input password"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input type={passwordVisible ? "text" : "password"} name="signUpPassword" onChange={handleChange} value={inputsValues.signUpPassword} spellCheck="false" placeholder="Password"/>
        {
          passwordVisible ? (
            <AiOutlineEye onClick={() => setPasswordVisible(!passwordVisible)} className="eye"/>
          ) : (
            <AiOutlineEyeInvisible onClick={() => setPasswordVisible(!passwordVisible)} className="eye"/>
          )
        }
      </motion.div>

      <motion.div 
        className="input password"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input type={passwordConfirmVisible ? "text" : "password"} name="signUpPasswordConfirm" onChange={handleChange} value={inputsValues.signUpPasswordConfirm} spellCheck="false" placeholder="Confirm Password"/>
        {
          passwordConfirmVisible ? (
            <AiOutlineEye onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)} className="eye"/>
          ) : (
            <AiOutlineEyeInvisible onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)} className="eye"/>
          )
        }
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
