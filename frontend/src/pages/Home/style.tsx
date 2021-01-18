import styled from 'styled-components';

export const Container = styled.div`
margin-left: 10px;
`;

export const HeaderProducts = styled.header`
  width: 100%;
  height: 40px;
  margin: 30px 0 30px 10px;
`;

export const TitleHeader = styled.h1`
`;
export const ContainerProducts = styled.div``;

export const ItemProduct = styled.section`
display: flex;
flex-direction: row;
align-items: center;
padding-bottom: 10px;
margin-right: 10px;
padding-top: 5px;
box-shadow: 5px 5px 5px #1a535c;
background: #4ecdc4;
color: #1a535c;
& + section {
  margin-top: 10px;
}
`;

export const ContainerImageProduct = styled.picture`
margin: 5px 10px 5px 10px;
width: 50px;
height: 50px;
`;

export const ProductImage = styled.img`
`;

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
