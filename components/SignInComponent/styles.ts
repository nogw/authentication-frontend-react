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

  .options {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    width: 100%;

    .forgetpassword {
      margin-top: 0.8px;

      a {
        color: #0c63bd;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
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
    margin: 24px;
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

export const Checkbox = styled.div`
  .b-contain *, .b-contain *::before, .b-contain *::after {
    box-sizing: content-box !important;
  }

  .b-contain input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .b-contain span {
    line-height: 1.54;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    font-family: inherit;
  }

  .b-contain {
    display: table;
    position: relative;
    padding-left: 1.8rem;
    cursor: pointer;
    margin-bottom: .5rem;
  }

  .b-contain input[type="checkbox"] ~ .b-input {
    position: absolute;
    top: 2.4px;
    left: 0;
    height: 1.1rem;
    width: 1.1rem;
    background: #fff;
    transition: background 250ms;
    border: 1px solid rgba(184, 194, 204, 1);
    border-radius: 0.125rem;
  }

  .b-contain input[type="radio"] ~ .b-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.1rem;
    width: 1.1rem;
    background: rgba(241, 245, 248, 1);
    transition: background 250ms;
    border: 1px solid rgba(184, 194, 204, 1);
    border-radius: 2.0rem;
  }

  .b-contain input[type="checkbox"] ~ .b-input::after {
    content: '';
    position: absolute;
    display: none;
    left: 0.42rem;
    top: 0.10rem;
    width: 0.21rem;
    height: .6rem;
    border: solid rgba(255, 255, 255, 1);
    border-width: 0 2px 2px 0;
    transition: background 250ms;
    transform: rotate(45deg);
  }

  .b-contain input[type="radio"] ~ .b-input::after {
    content: '';
    position: absolute;
    display: none;
    left: .25rem;
    top: .25rem;
    width: .75rem;
    height: .75rem;
    border-radius: 2.0rem;
    background: rgba(255, 255, 255, 1);
    transition: background 250ms;
  }

  .b-contain input:disabled ~ .b-input::after {
    border-color: rgba(135, 149, 161, 1);
  }

  .b-contain input:checked ~ .b-input::after {
    display: block;
  }

  .b-contain input:checked ~ .b-input {
    background: #0c63bd;
    border-color: #0c63bd;
  }

  .b-contain input[type="checkbox"]:disabled ~ .b-input {
    background: rgba(241, 245, 248, 1);
    border-color: rgba(184, 194, 204, 1);
    opacity: 0.6;
    cursor: not-allowed;
  }

  .b-contain input[type="radio"]:disabled ~ .b-input {
    background: rgba(241, 245, 248, 1);
    border-color: rgba(184, 194, 204, 1);
    opacity: 0.6;
    cursor: not-allowed;
  }

  .b-contain input[type="radio"]:disabled ~ .b-input::after {
    background: rgba(135, 149, 161, 1);
  }

  .b-contain input:checked:focus ~ .b-input, .b-contain:hover input:not([disabled]):checked ~ .b-input {
    background: rgba(13, 143, 255, 1);
    border-color: rgba(13, 143, 255, 1);
  }

  .b-contain .b-input::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    margin-left: -0.85rem;
    margin-top: -0.85rem;
    background: #0c63bd;
    border-radius: 2rem;
    opacity: .6;
    z-index: 99999;
    transform: scale(0);
  }

  @keyframes b-ripple {
    0% {
      transform: scale(0);
    }

    20% {
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1);
      }
  }

  @keyframes b-ripple-duplicate {
    0% {
      transform: scale(0);
    }

    30% {
      transform: scale(1);
    }

    60% {
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1);
      }
  }

  .b-contain input + .b-input::before {
    animation: b-ripple 250ms ease-out;
  }

  .b-contain input:checked + .b-input::before {
    animation-name: b-ripple-duplicate;
  }

  .b-contain .b-input::before {
    visibility: hidden;
  }

  .b-contain input:focus + .b-input::before {
    visibility: visible;
  }

  .b-contain:first-child .b-input::before {
    visibility: hidden;
  }
`;