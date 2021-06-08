import { motion } from "framer-motion"
import { io, Socket } from "socket.io-client"
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { v4 as uuidv4 } from "uuid";
import nookies from 'nookies'

import { Container } from "./styles";
import Router from "next/router";

function QrCodeLogin({ setMenuNow }) {
  const socket = io("http://localhost:8000");
  const socketIdRoom = uuidv4()

  socket.on("connect", () => {
    console.log(socket.id)

    socket.emit("join", socketIdRoom)  
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
          value={`${process.env.BACKEND_URL}/auth/qrcode/${socketIdRoom}`} 
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
