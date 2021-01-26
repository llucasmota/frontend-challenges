import React from 'react';
import { ContainerItems } from './style';

import Input from '../Input';

interface ISpecificationProducts {
  label: string;
  unity: string;
}

const SpecificationProduct: React.FC<ISpecificationProducts> = ({
  label,
  unity,
}) => {
  return (
    <ContainerItems>
      <p>{label}</p>
      <Input type="number" placeholder="" />
      <span>{unity}</span>
    </ContainerItems>
  );
};

export default SpecificationProduct;
