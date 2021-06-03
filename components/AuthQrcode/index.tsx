import { Container } from './styles';
import { useEffect, useState } from 'react';
import { io } from "socket.io-client"
import { useRouter } from 'next/router';

function AuthQrcode() {
  const router = useRouter()
  const { slug } = router.query
  
  const socket = io("http://localhost:8000");

  socket.on('connect', () => {
    console.log(socket.id)
    
    socket.emit("join", slug)  
  
    socket.emit("jwt", "hiii this is suppost jwt token")

    console.log(slug)
  });

  return (
    <Container>
      <h1>AuthQrcode</h1>
    </Container>
  );
};

export default AuthQrcode;
