import React from 'react';
import AuthQrcode from '../../../components/AuthQrcode';
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Slug(){
  return <Container>
    <AuthQrcode/>
  </Container>;
}

export default Slug;
