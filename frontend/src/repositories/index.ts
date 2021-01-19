import { gql } from '@apollo/client';
import { clientGraphql } from '../services/index';

export const GET_ALL_PRODUCTS = gql`
  query getAllProducts($page: Int!, $perPage: Int) {
    allSkus(page: $page, perPage: $perPage) {
      id
      name
      imageUrl
      salePrice
      promotionalPrice
    }
  }
`;
