import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-flow: column;
  align-items: strech;
  justify-content: space-around;
`;

export const ContainerShowerProduct = styled.main`
  margin: 0 10px 0 10px;
  picture > img {
    margin-top: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeaderProduct = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  margin: 30px 0 10px 0;
  align-items: center;

  a {
  }
  h1 {
    margin-left: 20px;
    font-size: 21px;
    line-height: 24px;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 1;
`;

export const ContainerEstoque = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%auto;
  align-items: space-between;

  button {
    outline: 0;
    background: transparent;
    height: 30px;
    margin: 45px 0 0 0;
    width: 30px;
    border-radius: 10px;
    border-style: none;
  }
`;
