import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  background-color: #fff;
  border-radius: 6px;
  padding: 36px;
  margin: 12px;
  width: 26rem; 
  
  .input {
    input:first-child {
      margin-bottom: 12px;
    }

    input {
      transition: 200ms ease all;
      font-size: 0.9rem;
      width: 100%;
      border: 1px solid #f1f1f1;
      padding: 10px;
      border-radius: 2px;
      outline: none;

      &:hover {
        border: 1px solid #0c63bd;
      }

      &:focus {
        border: 1px solid #0c63bd;
        box-shadow: 0px 0px 0px 1.4px rgba(12,99,189, 0.3);
      }

      &::placeholder {
        opacity: 0.6;
      }
    }
  }

  .btnwithoutcolor {
    width: 100%;

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
  }

  .btnwithcolor {
    margin-top: 24px;
    width: 100%;

    button {
      background-color: #0c63bd;
      outline: none;
      transition: 200ms ease all;
      width: 100%;
      border: none;
      padding: 10px 10px 11px 10px;
      color: #f1f1f1;
      cursor: pointer;
      border-radius: 2px;
      font-size: 15px;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media screen and (max-width: 600px) {
    margin: 24px;
    width: clamp(10rem, 100%, 22rem);
    display: flex;
    align-items: center;
    flex-direction: column;

    .input {
      width: 100%;
      
      input {
        width: 100%;
      }
    }
  }
`;
