import React from 'react';
import { HeaderProducts } from './style';

const Home: React.FC = () => (
  <>
    <HeaderProducts>
      <h1>Produtos</h1>
    </HeaderProducts>
    <section>
      <picture>
        <img src="" alt="" />
      </picture>
      <div>
        <p>
          Nome do produto com até duas linhasdasdsa
        </p>
        <span>
          1 x R$39,99
        </span>
      </div>
    </section>
  </>
);

export default Home;
