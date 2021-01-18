import React from 'react';
import { ContainerImageProduct, ImageProduct } from './style';
import img from '../../../assets/image-placeholder.png';

interface IImage {
  image: string;
}

const ProductImage: React.FC<IImage> = ({ image }) => (
  <ContainerImageProduct>
    <ImageProduct src={image} alt="product" />
  </ContainerImageProduct>
);

export default ProductImage;
