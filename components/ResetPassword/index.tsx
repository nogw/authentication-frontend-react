import { Container } from './styles';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { api } from '../../services/api';
import NProgress from 'nprogress'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IInputsResetPassword } from '../../types/loginTypes';
import { useRouter } from 'next/router'

function ResetPassword() {
  const router = useRouter()
  const { slug } = router.query

  const initialInputsValues: IInputsResetPassword = {
    password: "",
    passwordConfirm: ""
  }
  
  const [email, setEmail] = useState("")
  const [inputsValues, setInputsValues] = useState(initialInputsValues)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputsValues(prev => ({ ...prev, [name]: value }))
  }

  const handleResetPassword = () => {
    NProgress.start()
    api.post(`/reset/password/${slug}`, {
      password: inputsValues.password,
      confirmPassword: inputsValues.passwordConfirm
    }).then((res) => {
      NProgress.done()
      console.log(res)
    }).catch((err) => {
      NProgress.done()
      console.log(err)
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
        Create a new password
      </motion.h1>
      <motion.div 
        className="input password"
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
      </motion.div>

      <motion.div 
        className="input password"
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
      </motion.div>

      <motion.div 
        className="btnwithcolor"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button onClick={handleResetPassword}>Reset</button>
      </motion.div>
    </Container>
  );
};

export default ResetPassword;
