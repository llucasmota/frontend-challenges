/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { ContainerInfoProduct } from './style';

interface IInfoItemProduct {
  name: string;
  salePrice: number;
}

const InfoItemProduct: React.FC<IInfoItemProduct> = ({ name, salePrice }) => {
  const newSalePrice = salePrice.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  });
  const [firstPrice, subPrice] = newSalePrice.split(',');
  return (
    <ContainerInfoProduct>
      <p>{name}</p>
      <span>
        {' 1 x R$ '} {firstPrice}, <sup>{subPrice}</sup>
      </span>
    </ContainerInfoProduct>
  );
};

export default InfoItemProduct;
