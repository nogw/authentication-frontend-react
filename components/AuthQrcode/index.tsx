import { Container } from './styles';
import { useEffect, useState } from 'react';
import { io } from "socket.io-client"
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies'

export async function getServerSideProps() {
  const router = useRouter()
  const { slug } = router.query
  
  const socket = io("http://localhost:8000");

  socket.on('connect', () => {
    console.log(socket.id)

    const { 'next.auth.app.v1': token } = parseCookies()
    
    if (!token) {
      console.log(token)
    }
    
    socket.emit("join", slug)    
    socket.emit("jwt", token)

    return {
      props: {
        success: true
      },
    }
  });
}

function AuthQrcode({ success }) {
  return (
    <Container>
      {
        success == true ? (
          <h1>success</h1>
        ) : (
          <h1>you need auth to accept qrcode</h1>
        )
      }
    </Container>
  );
};

export default AuthQrcode;
