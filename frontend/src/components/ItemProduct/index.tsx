import React from 'react';
import ProductImage from './ProductImage';
import InfoItemProduct from './InfoItemProduct';
import { ContainerItemProduct } from './style';

const ItemProduct: React.FC<{id: number, salePrice: number, desc: string, imageUrl: string}> = ({
  id, salePrice, desc, imageUrl,
}) => (
  <ContainerItemProduct key={id}>
    <ProductImage imageUrl={imageUrl} />
    <InfoItemProduct salePrice={salePrice} desc={desc} />
  </ContainerItemProduct>

);

export default ItemProduct;
