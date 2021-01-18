import styled from 'styled-components';

export const ContainerItemProduct = styled.section`
display: flex;
flex-direction: row;
align-items: center;
padding-bottom: 10px;
margin-right: 10px;
padding-top: 5px;
box-shadow: 5px 5px 5px #1a535c;
background: #4ecdc4;
color: #1a535c;
transition: background-color 0.2s;

& + section {
  margin-top: 10px;
}
:hover{
  background: #ffe66d;
}
`;
