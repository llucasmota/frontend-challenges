import React, { useState, useEffect, Children } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  useParams,
  useHistory,
  Link,
  RouteComponentProps,
  RouteChildrenProps,
  RouteProps,
} from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { FcPlus, FcMinus } from 'react-icons/fc';
import { GET_PRODUCTS_BY_ID } from '../../repositories/index';

import Input from '../../components/Input';
import Button from '../../components/Button';
import SpecificationProduct from '../../components/SpecificationProducts';
import imgSmart from '../../assets/image-placeholder@3x.png';
import {
  HeaderProduct,
  ContainerInputs,
  ContainerEstoque,
  Container,
  ContainerShowerProduct,
} from './style';
import Header from '../../components/Header';

const optionsSpecProducts: any[] = [
  {
    label: 'Peso',
    unity: 'Kg',
  },
  {
    label: 'Altura',
    unity: 'cm',
  },
  {
    label: 'Largura',
    unity: 'cm',
  },
  {
    label: 'Profundida',
    unity: 'cm',
  },
];
type TParams = { id: string };

interface IProduct {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  package: object;
}

const Products = ({ match }: RouteComponentProps<TParams>) => {
  const [products, setProducts] = useState({});
  const [error, setError] = useState(false);
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const { id } = match.params;
  const [loadProductsById, { loading }] = useLazyQuery(GET_PRODUCTS_BY_ID, {
    onError: () => setError(true),
    onCompleted: data => {
      const { Sku } = data;
      !loading && setProduct(Sku);
    },
  });

  const unescapeHTML = (texto: string) => {
    return texto
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  };

  useEffect(() => {
    loadProductsById({
      variables: { prodId: id },
    });
  }, []);

  return (
    <div>
      <HeaderProduct>
        <Link to="/">
          <IoMdArrowRoundBack size={40} color="#000000" />
        </Link>
        <h1>Nome do Produto</h1>
      </HeaderProduct>
      <form action="">
        <ContainerShowerProduct>
          <Header title={unescapeHTML(product.description)} />
          <picture>
            <img src={product.imageUrl} alt="" />
          </picture>
        </ContainerShowerProduct>
        <ContainerEstoque>
          <Input name="Estoque" type="number" placeholder="" />
          <button type="button">
            <FcPlus size={20} />
          </button>
          <button type="button">
            <FcMinus size={20} />
          </button>
        </ContainerEstoque>
        <ContainerInputs>
          <Input name="Preço a venda" type="number" placeholder="R$" />
          <Input
            name="Preço promocional"
            placeholder="R$"
            type="number"
            step="0.01"
            min="0.01"
          />
        </ContainerInputs>
        <Container>
          {optionsSpecProducts.map(item => (
            <SpecificationProduct label={item.label} unity={item.unity} />
          ))}
        </Container>
        <Button text="Salvar Alterações" />
      </form>
    </div>
  );
};

export default Products;
