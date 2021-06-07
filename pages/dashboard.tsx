import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { useContext } from 'react';
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  button {
    border: 1px solid #f1f1f1;
    color: rgba(0,0,0,.85);
    line-height: 22px;
    padding: 6px 15px;
    font-weight: lighter;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border-radius: 4px;
    transition: 300ms ease all;
    width: 200px;

    &:hover {
      color: #0c63bd;
      border: 1px solid #0c63bd;
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['next.auth.app.v1']: tokenResponse } = parseCookies(ctx)

  if (!tokenResponse) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

function Dashboard() {
  const { logOutAccount, user } = useContext(AuthContext)

  return (
    <Container>
      <button onClick={logOutAccount}>Log out</button>
    </Container>
  );
}

export default Dashboard;
