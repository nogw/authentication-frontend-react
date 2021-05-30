import { Container } from './styles';
import { motion } from 'framer-motion';
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import QrCodeLogin from '../QrCodeLogin';
import ResetPassword from '../ResetPassword';
import SignUpComponent from '../SignUpComponent';
import SignInComponent from '../SignInComponent';

function LoginComponent() {
  const [MenuNow, setMenuNow] = useState('login')

  return (
    <Container>
      <CSSTransition 
        in={MenuNow === 'login'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
      >
        <SignInComponent setMenuNow={setMenuNow}/>
      </CSSTransition>

      <CSSTransition 
        in={MenuNow === 'register'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-secondary"
      >
        <SignUpComponent setMenuNow={setMenuNow}/>
      </CSSTransition>

      <CSSTransition
        in={MenuNow === 'qrcode'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-secondary"
      >
        <QrCodeLogin setMenuNow={setMenuNow}/>
      </CSSTransition>
      
      <CSSTransition
        in={MenuNow === 'forgetpassword'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-secondary"
      >
        <ResetPassword setMenuNow={setMenuNow}/>
      </CSSTransition>
    </Container>
  );
};

export default LoginComponent;
