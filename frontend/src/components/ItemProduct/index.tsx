import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';
import InfoItemProduct from './InfoItemProduct';
import { ContainerItemProduct } from './style';

interface IItemPRoduct {
  id: number;
  salePrice: number;
  name: string;
  imageUrl: string;
}

const ItemProduct: React.FC<IItemPRoduct> = ({
  id,
  salePrice,
  name,
  imageUrl,
}) => {
  return (
    <ContainerItemProduct key={id}>
      <ProductImage imageUrl={imageUrl} />
      <InfoItemProduct salePrice={salePrice} name={name} />
    </ContainerItemProduct>
  );
};

export default ItemProduct;
