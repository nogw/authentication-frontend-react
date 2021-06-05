import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  .menu {
    width: 100%;
  }
  
  .menu {
    width: 100%;
  }

  .menu-primary-enter {
    position: absolute;
    transform: translateX(160px) scale(0.1);
    opacity: 0;
  }

  .menu-primary-enter-active {
    transform: translateX(0%)  scale(1);
    transition: all 400ms ease;
    opacity: 1;
  }

  .menu-primary-exit {
    position: absolute;
  }

  .menu-primary-exit-active {
    transform: translateX(-60px)  scale(0.9);
    transition: all 400ms ease;
    opacity: 0;
  }

  .sign {
    font-size: 1.5rem;
    margin-bottom: 32px;
    color: rgba(0,0,0,.85);
  }
`;