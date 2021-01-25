import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerItemProduct = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  padding-bottom: 10px;
  margin-right: 10px;
  padding-top: 5px;
  box-shadow: 3px 3px 7px #e9c46a;
  background: #d1e0e0;
  color: #1a535c;
  margin-top: 10px;
  :hover {
    background: #ffe66d;
  }
`;
