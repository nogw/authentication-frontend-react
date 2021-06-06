import { motion } from "framer-motion"
import { io, Socket } from "socket.io-client"
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { v4 as uuidv4 } from "uuid";
import nookies from 'nookies'

import { Container } from "./styles";

function QrCodeLogin({ setMenuNow }) {
  const socket = io("http://localhost:8000");
  const socketIdRoom = uuidv4()

  socket.on("connect", () => {
    console.log(socket.id)

    socket.emit("join", socketIdRoom)  
  });

  socket.on("auth", (jwt: Socket) => {
    console.log(jwt.toString())
    
    nookies.set(undefined, 'next.auth.app.v1', jwt.toString(), {
      maxAge: 60 * 60 * 24,
      path: '/'
    })
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
          value={`http://localhost:3000/auth/qrcode/${socketIdRoom}`} 
          renderAs={"svg"}
          style={{ height: "calc(100% + 0px)", width: "calc(100% + 0px)"}}
        />
      </motion.div>

      <p>{socketIdRoom}</p>

      <motion.div            
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }} 
        className="scantext"
      >
        <div className="line" />
        <p>scanning the code to complete the login</p>
        <div className="line" />
      </motion.div>

      <motion.button 
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={() => setMenuNow("login")}
      >
        Back sign in
      </motion.button>
    </Container>
  );
};

export default QrCodeLogin;
