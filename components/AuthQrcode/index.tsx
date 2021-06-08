import { Container } from './styles';
import { useEffect, useState } from 'react';
import { io } from "socket.io-client"
import { useRouter } from 'next/router';
import Router from 'next/router';
import nookies from 'nookies'
import { GetServerSideProps } from 'next';

function AuthQrcode({ tokenExists }) {
  const socket = io("http://localhost:8000");
  
  const router = useRouter()
  const { slug } = router.query

  socket.on('connect', () => {
    console.log(socket.id)
    const { 'next.auth.app.v1': token } = nookies.get()

    if (token) {
      socket.emit("join", slug)    
      socket.emit("jwt", token)
    }
  });

  return (
    <Container>
      {
        !tokenExists ? (
          <>
            <button onClick={() => router.push("/login")} className="message error">you need auth to accept qrcode</button>
          </>
        ) : (
          <>
            <h1 className="message success">success</h1>
          </>
        )
      }
    </Container>
  );
};

export default AuthQrcode;
