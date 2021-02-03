import React, { useState, useEffect, useCallback } from 'react';
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
    name: 'weight',
  },
  {
    label: 'Altura',
    unity: 'cm',
    name: 'height',
  },
  {
    label: 'Largura',
    unity: 'cm',
    name: 'width',
  },
  {
    label: 'Profundida',
    unity: 'cm',
    name: 'depth',
  },
];
type TParams = { id: string };

interface IProduct {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  package: object;
  promotionalPrice: number;
  quantity: number;
  salePrice: number;
}

const Products = ({ match }: RouteComponentProps<TParams>) => {
  const [products, setProducts] = useState({});
  const [error, setError] = useState(false);
  const [estoque, setEstoque] = useState(0);
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const { id } = match.params;
  const [loadProductsById, { loading }] = useLazyQuery(GET_PRODUCTS_BY_ID, {
    onError: () => setError(true),
    onCompleted: data => {
      const { Sku } = data;
      !loading && setProduct(Sku);
    },
  });

  useEffect(() => {
    loadProductsById({
      variables: { prodId: id },
    });
    return () => setEstoque(product.quantity);
  }, [id]);

  const handleInputEstoque = (e: React.FormEvent<HTMLInputElement>) => {
    setEstoque(parseInt(e.currentTarget.value, 10));
  };
  const handleInputEstoqueWithButton = (
    acao: string,
    e: React.FormEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    if (acao === 'plus') {
      setEstoque(estoque + 1);
    }
    if (acao === 'minus') {
      const estoqueCopia = estoque > 0 ? estoque - 1 : estoque;
      setEstoque(estoqueCopia);
    }
  };

  const unescapeHTML = (escapedHTML: string) => {
    return escapedHTML
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  };

  // const handleInput = e => {
  //   const { name, value } = e.target;
  //   const productCopy = { ...product };
  //   productCopy[name] = value;
  //   setProduct(productCopy);
  // };

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
          <Header title={product.name} />
          <picture>
            <img src={product.imageUrl} alt="" />
          </picture>
        </ContainerShowerProduct>
        <ContainerEstoque>
          <Input
            title="Estoque"
            type="number"
            placeholder=""
            name="quantity"
            value={estoque}
            onChange={handleInputEstoque}
          />
          <button
            type="button"
            onClick={e => handleInputEstoqueWithButton('plus', e)}
          >
            <FcPlus size={20} />
          </button>
          <button
            type="button"
            onClick={e => handleInputEstoqueWithButton('minus', e)}
          >
            <FcMinus size={20} />
          </button>
        </ContainerEstoque>
        <ContainerInputs>
          <Input
            title="Preço a venda"
            type="number"
            placeholder="R$"
            name="salePrice"
          />
          <Input
            title="Preço promocional"
            placeholder="R$"
            type="number"
            step="0.01"
            min="0.01"
            name="promotionalPrice"
          />
        </ContainerInputs>
        <Container>
          {optionsSpecProducts.map(item => (
            <SpecificationProduct
              label={item.label}
              unity={item.unity}
              name={item.name}
              key={item.name}
            />
          ))}
        </Container>
        <Button text="Salvar Alterações" />
      </form>
    </div>
  );
};

export default Products;
