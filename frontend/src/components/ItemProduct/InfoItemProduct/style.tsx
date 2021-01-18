import styled from 'styled-components';

export const ContainerInfoProduct = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

& > span{
  margin-top: 2px;
  & > sup{
font-size: 10px
  }
}
&>p{
  margin-top: 2px;
}

`;
