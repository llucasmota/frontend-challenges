import React from 'react';
import { ContainerItems } from './style';

import Input from '../Input';

interface ISpecificationProducts {
  label: string;
  unity: string;
  name: string;
}

const SpecificationProduct: React.FC<ISpecificationProducts> = ({
  label,
  unity,
  name,
}) => {
  return (
    <ContainerItems>
      <p>{label}</p>
      <Input type="number" placeholder="" name={name} />
      <span>{unity}</span>
    </ContainerItems>
  );
};

export default SpecificationProduct;
