import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { stringify } from 'querystring';
import { GET_ALL_PRODUCTS } from '../../repositories/index';
import {
  HeaderProducts,
  Container,
  TitleHeader,
  ContainerProducts,
} from './style';
import img from '../../assets/image-placeholder.png';
import ItemProduct from '../../components/ItemProduct';

// const dataProduct = [
//   {
//     desc: 'Nome do produto com até duas linhasdasdsa',
//     price: 39.99,
//     image: img,
//   },
//   {
//     desc: 'Nome do produto com até duas linhasdasdsa',
//     price: 39.99,
//     image: img,
//   },
//   {
//     desc: 'Nome do produto com até duas linhasdasdsa',
//     price: 39.98,
//     image: img,
//   },
// ];

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);

  const { data, loading } = useQuery(GET_ALL_PRODUCTS, {
    variables: { page: 1, perPape: 10 },
  });
  console.log('Aqui está', data);

  useEffect(() => (
    data?.allSkus ? setProducts(data.allSkus) : setProducts([])), [data]);
  return (

    <Container>
      <HeaderProducts>
        <TitleHeader>Produtos</TitleHeader>
      </HeaderProducts>
      {loading }
      <ContainerProducts>
        {products.length > 0 && products.map(({
          id, desc, salePrice, imageUrl,
        }) => (
          <ItemProduct id={id} desc={desc} salePrice={salePrice} imageUrl={imageUrl} />
        ))}
      </ContainerProducts>
      {loading && (<div>Carregando</div>)}
    </Container>
  );
};

export default Home;
