/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { ContainerInfoProduct } from './style';

interface IInfoItemProduct {
  name: string;
  salePrice: number;
}

const InfoItemProduct: React.FC<IInfoItemProduct> = ({ name, salePrice }) => {
  const newSalePrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(salePrice);
  const [firstPrice, subPrice] = newSalePrice.split(',');

  return (
    <ContainerInfoProduct>
      <p>{name}</p>
      <span>
        {' 1 x '} {firstPrice}, <sup>{subPrice}</sup>
      </span>
    </ContainerInfoProduct>
  );
};

export default InfoItemProduct;
