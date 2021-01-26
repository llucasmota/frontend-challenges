import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useParams, useHistory, Link } from 'react-router-dom';

import { FcPlus, FcMinus } from 'react-icons/fc';

import Input from '../../components/Input';
import Button from '../../components/Button';
import SpecificationProduct from '../../components/SpecificationProducts';
import imgSmart from '../../assets/image-placeholder@3x.png';
import {
  HeaderProduct,
  ContainerInputs,
  ContainerEstoque,
  Container,
  ContainerShowerProduct,
} from './style';
import Header from '../../components/Header';

const optionsSpecProducts: any[] = [
  {
    label: 'Peso',
    unity: 'Kg',
  },
  {
    label: 'Altura',
    unity: 'cm',
  },
  {
    label: 'Largura',
    unity: 'cm',
  },
  {
    label: 'Profundida',
    unity: 'cm',
  },
];

const Products: React.FC = () => {
  return (
    <div>
      <HeaderProduct>
        <Link to="/">
          <IoMdArrowRoundBack size={40} color="#000000" />
        </Link>
        <h1>Nome do Produto</h1>
      </HeaderProduct>
      <ContainerShowerProduct>
        <Header title="Aqui está a descrição de um produto" />
        <picture>
          <img src={imgSmart} alt="" />
        </picture>
      </ContainerShowerProduct>
      <ContainerEstoque>
        <Input name="Estoque" type="number" placeholder="" />
        <button type="button">
          <FcPlus size={20} />
        </button>
        <button type="button">
          <FcMinus size={20} />
        </button>
      </ContainerEstoque>
      <ContainerInputs>
        <Input name="Preço a venda" type="number" placeholder="" />
        <Input name="Preço promocional" placeholder="" type="number" />
      </ContainerInputs>
      <Container>
        {optionsSpecProducts.map(item => (
          <SpecificationProduct label={item.label} unity={item.unity} />
        ))}
      </Container>
      <Button text="Salvar Alterações" />
    </div>
  );
};

export default Products;
