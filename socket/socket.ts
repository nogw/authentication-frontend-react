import { io } from "socket.io-client"

const URL = process.env.SOCKET_URL || "http://localhost:8000"
const socket = io(URL)

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket