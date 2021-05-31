import React from 'react';
import ResetPassword from '../../components/ResetPassword';
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
    <ResetPassword/>
  </Container>;
}

export default Slug;
