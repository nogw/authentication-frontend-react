import styled from 'styled-components';

export const Container = styled.div`
  .message {
    line-height: 22px;
    padding: 10px 15px;
    font-weight: lighter;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border-radius: 4px;
    transition: 300ms ease all;
    width: 100%;
    font-size: 16px;
    margin-top: 10px;
    color: #b2b2b2;
    border: 1px solid #b2b2b2;
    
    &.error {
      color: #f09696;
      border: 1px solid #f09696;
    }

    &.success {
      color: #0c63bd;
      border: 1px solid #0c63bd;
    }
  }
`;
