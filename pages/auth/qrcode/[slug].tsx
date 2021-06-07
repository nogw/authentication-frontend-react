import React from 'react';
import AuthQrcode from '../../../components/AuthQrcode';
import styled from 'styled-components'
import { parseCookies } from 'nookies';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const getServerSideProps = async context => {
  const { 'next.auth.app.v1': token } = parseCookies(context)
  
  if (token) {
    return {
      props: {
        tokenExists: true 
      }
    }
  }

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    }
  }
}

function Slug({ tokenExists }){
  return <Container>
    <AuthQrcode tokenExists={tokenExists}/>
  </Container>;
}

export default Slug;
