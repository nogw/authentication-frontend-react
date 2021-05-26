import LoginComponent from '../components/LoginComponent'
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  @media screen and (max-width: 600px) {
    background-color: #293146
  }
`;


export default function Login() {
  return (
    <Container>
      <LoginComponent/>
    </Container>
  )
}