import { Container } from './styles';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { api } from '../../services/api';
import NProgress from 'nprogress'

function ResetPasswordSendEmail({ setMenuNow }) {
  const [email, setEmail] = useState("")

  const handleResetPassword = () => {
    NProgress.start()

    api.post("/reset", {
      emailToReset: email
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
        Reset password
      </motion.h1>
      <motion.div 
        className="input"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <input name="emailToReset" onChange={(e) => setEmail(e.target.value)} value={email} spellCheck="false" type="text" placeholder="Email"/>
      </motion.div>

      <motion.div 
        className="btnwithcolor"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button onClick={handleResetPassword}>Reset</button>
      </motion.div>

      <motion.div 
        className="btnwithoutcolor"
        style={{ marginTop: "12px" }}
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <button onClick={() => setMenuNow('login')}>Back sign in</button>
      </motion.div>
    </Container>
  );
};

export default ResetPasswordSendEmail;
