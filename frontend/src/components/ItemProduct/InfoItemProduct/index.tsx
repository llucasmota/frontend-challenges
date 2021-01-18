import React from 'react';
import { ContainerInfoProduct } from './style';

interface IItemProduct{
  desc: string;
  price: number;
}

const InfoItemProduct: React.FC<IItemProduct> = ({ desc, price }) => {
  const priceString = String(price);

  const [firstPrice, subPrice] = priceString.split('.');

  return (
    <ContainerInfoProduct>
      <p>{desc}</p>
      <span>
        1 x R$
        {' '}
        {firstPrice}
        ,
        <sup>{subPrice}</sup>
      </span>
    </ContainerInfoProduct>
  );
};

export default InfoItemProduct;
