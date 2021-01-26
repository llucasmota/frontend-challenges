import React from 'react';
import { HeaderProducts, TitleHeader } from './style';

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title }) => (
  <HeaderProducts>
    <TitleHeader>{title}</TitleHeader>
  </HeaderProducts>
);

export default Header;
