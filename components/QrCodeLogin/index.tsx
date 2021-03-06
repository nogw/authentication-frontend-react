import { motion } from "framer-motion"
import { io, Socket } from "socket.io-client"
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { v4 as uuidv4 } from "uuid";
import nookies from 'nookies'

import { Container } from "./styles";
import Router from "next/router";

function QrCodeLogin({ setMenuNow }) {
  const [qrCodeId, setQrCodeId] = useState(uuidv4()) 
  const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL);

  socket.on("connect", () => {
    setQrCodeId(uuidv4())
    socket.emit("join", qrCodeId)  
  });

  socket.on("auth", (jwt: Socket) => {
    console.log(jwt)
    
    nookies.set(undefined, 'next.auth.app.v1', jwt.toString(), {
      maxAge: 60 * 60 * 24,
      path: '/'
    })

    Router.push("/dashboard")
  })

  return (
    <Container>
      <motion.div
        className="qrcodediv"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }} 
      >
        <QRCode 
          value={`https://authentication-frontend-react.vercel.app/auth/qrcode/${qrCodeId}`} 
          renderAs={"svg"}
          style={{ height: "calc(100% + 0px)", width: "calc(100% + 0px)"}}
        />
      </motion.div>

      <motion.div            
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.05 }} 
        className="scantext"
      >
        <div className="line" />
        <p>scanning the code to complete the login in a browser already logged in</p>
        <div className="line" />
      </motion.div>

      <motion.button 
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        onClick={() => setMenuNow("login")}
      >
        Back sign in
      </motion.button>
    </Container>
  );
};

export default QrCodeLogin;
