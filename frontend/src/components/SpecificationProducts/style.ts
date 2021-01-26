import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-flow: row;
  align-items: strech;
  justify-content: space-around;
`;
export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  border-radius: 5px;
  border-bottom: 1px solid #e9c46a;
  box-shadow: 3px 3px 7px #264653;

  + div {
    margin-top: 10px;
  }
  p {
    align-content: center;
    margin-left: 10px;
    flex: 1;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  span {
    margin-right: 5px;
  }
`;
