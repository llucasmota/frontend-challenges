import React from 'react';
import { ContainerImageProduct, ImageProduct } from './style';
import img from '../../../assets/image-placeholder.png';

const ProductImage: React.FC<{imageUrl: string}> = ({ imageUrl }) => (
  <ContainerImageProduct>
    {imageUrl === null ? (<ImageProduct src={img} />) : <ImageProduct src={imageUrl} />}

  </ContainerImageProduct>
);

export default ProductImage;
