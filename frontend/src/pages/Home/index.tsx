/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useLazyQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../../repositories/index';
import { Container, ContainerProducts, LinkProducts } from './style';
import Header from '../../components/Header';
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
  useEffect(() => {
    return () =>
      loadAllProducts({
        variables: { page, perPage },
      });
  }, []);

  const [loadAllProducts, { loading }] = useLazyQuery(GET_ALL_PRODUCTS, {
    onError: () => setError(true),
    onCompleted: data => {
      const { allSkus } = data;
      const prod = [...products];
      const newData = prod.concat(...allSkus);

      !loading && setProducts([...newData]);
    },
  });

  useEffect(() => {
    if (scrollRatio > 0) {
      const newNumberpage = page + 1;
      setPage(newNumberpage);
      loadAllProducts({
        variables: { page, perPage },
      });
    }
  }, [scrollRatio]);

  useEffect(() => {
    intersectionObserver.observe(intersectionRef.current);
    return () => {
      intersectionObserver.disconnect();
    };
  });

  return (
    <Container>
      <Header title="Produtos" />
      {loading}
      <p>{products.length}</p>
      <ContainerProducts>
        {!loading &&
          products.sort().map(({ id, name, salePrice, imageUrl }) => (
            <LinkProducts key={id} to={`products/${id}`}>
              <ItemProduct
                key={id}
                id={id}
                name={name}
                salePrice={salePrice}
                imageUrl={imageUrl}
              />
              <span>{id}</span>
            </LinkProducts>
          ))}
      </ContainerProducts>
      {}
      <div ref={intersectionRef} key="ref" />
    </Container>
  );
};

export default Home;
