import React from 'react';
import {
  HeaderProducts,
  Container,
  TitleHeader,
  ContainerProducts,
} from './style';
import img from '../../assets/image-placeholder.png';
import ItemProduct from '../../components/ItemProduct';

export interface IProduct {
  desc: string;
  price: number;
  image: string;
}

const data:IProduct[] = [
  {
    desc: 'Nome do produto com até duas linhasdasdsa',
    price: 39.99,
    image: img,
  },
  {
    desc: 'Nome do produto com até duas linhasdasdsa',
    price: 39.99,
    image: img,
  },
  {
    desc: 'Nome do produto com até duas linhasdasdsa',
    price: 39.98,
    image: img,
  },
];

const Home: React.FC = () => (
  <Container>
    <HeaderProducts>
      <TitleHeader>Produtos</TitleHeader>
    </HeaderProducts>
    <ContainerProducts>
      {data.length > 0 && data.map(({ desc, price, image }) => (
        <ItemProduct desc={desc} price={price} image={image} />
      ))}
    </ContainerProducts>
  </Container>
);

export default Home;
