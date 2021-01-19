import React from 'react';
import { ContainerInfoProduct } from './style';

const InfoItemProduct: React.FC<{desc:string, salePrice:number}> = ({ desc, salePrice }) => {
  const newSalePrice = salePrice.toLocaleString('pt-br', { minimumFractionDigits: 2 });
  const [firstPrice, subPrice] = newSalePrice.split(',');
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
