import { gql, useQuery } from '@apollo/client';
import React from 'react';
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
