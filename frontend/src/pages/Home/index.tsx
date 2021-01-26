/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useLazyQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../../repositories/index';
import {
  HeaderProducts,
  Container,
  TitleHeader,
  ContainerProducts,
  LinkProducts,
} from './style';
import ItemProduct from '../../components/ItemProduct';

interface IProducts {
  id: number;
  name: string;
  salePrice: number;
  imageUrl: string;
}

const Home: React.FC = () => {
  const intersectionRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [products, setProducts] = useState<Array<IProducts>>([]);
  const [page, setPage] = useState(1);
  const [perPage, setperPape] = useState(10);
  const [error, setError] = useState<boolean>(false);
  const [scrollRatio, setScrollRatio] = useState(0);

  const intersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      const radio = entries[0].intersectionRatio;
      setScrollRatio(radio);
    },
  );

  const [loadAllProducts, { loading }] = useLazyQuery(GET_ALL_PRODUCTS, {
    onError: () => setError(true),
    onCompleted: data => {
      const { allSkus } = data;
      !loading && setProducts([...products, ...allSkus]);
    },
  });

  useEffect(() => {
    loadAllProducts({
      variables: { page, perPage },
    });
  }, []);

  useEffect(() => {
    if (scrollRatio > 0) {
      const newNumberpage = page + 1;
      setPage(newNumberpage);
      loadAllProducts({
        variables: { page, perPage },
      });
    }
  }, [scrollRatio]);
  // montagem inicial

  useEffect(() => {
    intersectionObserver.observe(intersectionRef.current);
    return () => {
      intersectionObserver.disconnect();
    };
  });

  return (
    <Container>
      <HeaderProducts>
        <TitleHeader>Produtos</TitleHeader>
      </HeaderProducts>
      {loading}
      <ContainerProducts>
        {!loading &&
          products.map(({ id, name, salePrice, imageUrl }) => (
            <LinkProducts key={id} to={`/products/${id}`}>
              <ItemProduct
                key={id}
                id={id}
                name={name}
                salePrice={salePrice}
                imageUrl={imageUrl}
              />
            </LinkProducts>
          ))}
      </ContainerProducts>
      {loading && <div>Carregando</div>}
      <div ref={intersectionRef} key="ref" />
    </Container>
  );
};

export default Home;
