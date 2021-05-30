import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .menu {
    width: 100%;
  }
  .menu-primary-enter {
    position: absolute;
    transform: translateX(160px);
    opacity: 0;
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 400ms ease;
    opacity: 1;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-120px);
    transition: all 400ms ease;
    opacity: 0;
  }
  .menu-secondary-enter {
    transform: translateX(160px);
    opacity: 0;
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all 400ms ease;
    opacity: 1;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    transform: translateX(-120px);
    transition: all 400ms ease;
    opacity: 0;
  }
  
  .sign {
    font-size: 1.5rem;
    margin-bottom: 32px;
    color: rgba(0,0,0,.85);
  }
`;
