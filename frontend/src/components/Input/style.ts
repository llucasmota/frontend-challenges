import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  background: transparent;
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  color: #666360;
  align-items: end;

  input {
    margin: 10px 0 0 10px;
    border: 1px solid #e9c46a;
    border-radius: 5px;
    border: 0;
    height: 30px;
    width: 80px;
    color: #666360;
    outline: none;
    &::placeholder {
      color: #666360;
      padding: 0 2px 0 2px;
    }
  }
  span {
    margin-left: 5px;
  }
`;
