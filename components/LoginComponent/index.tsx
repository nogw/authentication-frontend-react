import { Container, Checkbox } from './styles';
import { motion } from 'framer-motion';

function LoginComponent() {
  return (
    <Container>
      <motion.h1 
        className="sign"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        Sign in
      </motion.h1>
    
      <motion.div 
        className="input"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <input type="text" placeholder="Email"/>
      </motion.div>
      <motion.div 
        className="input password"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input type="text" placeholder="Password"/>
      </motion.div>

      <motion.div 
        className="options"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Checkbox>
          <label className="b-contain">
            <span>Second checkbox</span>
            <input type="checkbox"/>
            <div className="b-input"/>
          </label>
        </Checkbox>
        <div className="forgetpassword">
          <a href="#">Forget Password?</a>
        </div>
      </motion.div>

      <motion.div 
        className="signbutton"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button>Sign in</button>
      </motion.div>

      <motion.div 
        className="buttons2create"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <button>Mobile sign in</button>
        <button>Sign up</button>
      </motion.div>
    </Container>
  );
};

export default LoginComponent;
