import { gql, useQuery } from '@apollo/client';
import { clientGraphql } from '../services/index';

export const GET_ALL_PRODUCTS = gql`
  query($page: Int, $perPage: Int) {
    allSkus(page: $page, perPage: $perPage) {
      id
      name
      imageUrl
      salePrice
      promotionalPrice
    }
  }
`;

export const GET_PRODUCTS_BY_ID = gql`
  query($prodId: ID!) {
    Sku(id: $prodId) {
      id
      name
      description
      imageUrl
      package
      salePrice
      promotionalPrice
      quantity
    }
  }
`;
