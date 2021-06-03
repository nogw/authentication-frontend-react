import { Container } from './styles';
import { motion } from 'framer-motion'
import { io } from "socket.io-client"

var QRCode = require('qrcode.react');

function QrCodeLogin({ setMenuNow }) {
  const socket = io("http://localhost:8000");

  socket.on('connection', function() {
    console.log("Successfully connected!");
  });

  return (
    <Container>
      <motion.div
        className="qrcodediv"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }} 
      >
        <QRCode 
          value="https://localhost:8000/authqrcode" 
          renderAs={"svg"}
          style={{ height: "calc(100% + 0px)", width: "calc(100% + 0px)"}}
        />
      </motion.div>

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

      <button>
        call socket function
      </button>
    </Container>
  );
};

export default QrCodeLogin;
