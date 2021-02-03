import React, { ReactElement } from 'react';
import { HeaderProducts, TitleHeader } from './style';

interface IHeader {
  title: string | ReactElement;
}

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <HeaderProducts>
      <TitleHeader>{title}</TitleHeader>
    </HeaderProducts>
  );
};

export default Header;
