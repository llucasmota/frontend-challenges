import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FcPlus, FcMinus } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import imgSmart from '../../assets/image-placeholder@3x.png';
import { Header } from './style';

const Products: React.FC = () => {
  return (
    <div>
      <Header>
        <Link to="/">
          <IoIosArrowBack size={40} />
        </Link>
        <h1>Nome do Produto</h1>
      </Header>
      <div>
        <strong>A descrição do produto</strong>
        <br />
        <picture>
          <img src={imgSmart} alt="" />
        </picture>
      </div>
      <div>
        <div>
          <span>Estoque</span>
          <input type="text" name="estoque" id="estoque" />
        </div>
        <div>
          <button type="button">
            <FcPlus size={20} />
          </button>
          <button type="button">
            <FcMinus size={20} />
          </button>
          <div>
            <span>Preço a vista</span>
            <input type="text" name="preco" id="preco" />
          </div>
          <div>
            <span>Preço promocional</span>
            <input type="text" name="preco" id="preco" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
