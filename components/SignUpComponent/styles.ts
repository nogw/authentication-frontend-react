import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  background-color: #fff;
  border-radius: 6px;
  padding: 36px;
  margin: 12px;
  width: 26rem; 

  .input {
    position: relative;

    input:first-child {
      margin-bottom: 26px;
    }

    .errorMessage {
      color: #f09696;
      position: absolute;
      top: 40px;
      left: 2px;
      font-size: 12.5px;
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

    &.error {
      input {
        border: 1px solid #f09696;
      }
    }

    &.password {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .eye {
        right: 15px;
        top: 10px;
        opacity: 0.4;
        position: absolute;
        cursor: pointer;
        transition: 200ms ease all;
        font-size: 18px;

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  .btnwithoutcolor {
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

  .buttons2create {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    gap: 8px;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: clamp(10rem, 100%, 22rem);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .buttons2create {
      display: flex;
      flex-direction: column;
    }

    .input {
      width: 100%;
      
      input {
        width: 100%;
      }
    }
  }
`;
