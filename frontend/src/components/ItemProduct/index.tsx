import React from 'react';
import ProductImage from './ProductImage';
import InfoItemProduct from './InfoItemProduct';
import { ContainerItemProduct } from './style';
import { IProduct } from '../../pages/Home';

const ItemProduct: React.FC<IProduct> = ({ price, desc, image }) => (
  <ContainerItemProduct>
    <ProductImage image={image} />
    <InfoItemProduct price={price} desc={desc} />
  </ContainerItemProduct>

);

export default ItemProduct;
