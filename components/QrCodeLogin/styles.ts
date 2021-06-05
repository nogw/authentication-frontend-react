import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  background-color: #fff;
  border-radius: 6px;
  padding: 24px 36px 36px 36px;
  margin: 12px;
  width: clamp(10rem, 100%, 20rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .qrcodediv {
    width: 100%;
  }

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
    width: 100%;

    &:hover {
      color: #0c63bd;
      border: 1px solid #0c63bd;
    }
  }

  .scantext {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 16px 0px 32px 0px;

    .line {
      margin-top: 4px;
      width: 12px;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.2);
    }

    p {
      color: rgba(0, 0, 0, 0.45);
      font-size: 12px;
      margin: auto;
    }
  }

  @media screen and (max-width: 600px) {
    width: clamp(10rem, 100%, 22rem);
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
