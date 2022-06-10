import { gql } from "@apollo/client";
import { CARRIAGES_IDS, PARTS_IDS } from "../utility/constants";

export const GET_CONTENT = gql`
  query getContentQuery {
    posts(where: { id: 46 }) {
      nodes {
        title
        acfcontent {
          address
          telCall
          telFront
          telWt
          telegram
        }
      }
    }
  }
`;

export const GET_ALL_PARTS = gql`
query GetAllParts($categoryIdIn: [Int] = [${PARTS_IDS}], $tagIn: [String], $after: String, $before: String, $first: Int, $last: Int) {
  products(
    where: {categoryIdIn: $categoryIdIn, tagIn: $tagIn}
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        ... on SimpleProduct {
          id
          name
          image {
            srcSet(size: THUMBNAIL)
          }
          price(format: FORMATTED)
          productsKP {
            godVypuska
            mestonahozhdenie
            telezhka
            tolshhinaOboda
          }
          stockQuantity
          shortDescription(format: RENDERED)
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
`;

export const GET_ALL_PARTS_COUNTS = gql`
  query GetAllPartsCount($tagIn: [String]) {
    products(where: { categoryIdIn: [29, 32, 33], tagIn: $tagIn }) {
      pageInfo {
        total
      }
    }
  }
`;

export const GET_ALL_CARRIAGES = gql`
query GetAllCarriages($categoryIdIn: [Int] = [${CARRIAGES_IDS}], $tagIn: [String], $after: String, $before: String, $first: Int, $last: Int) {
  products(
    where: {categoryIdIn: $categoryIdIn, tagIn: $tagIn}
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        ... on SimpleProduct {
          id
          name
          image {
            srcSet(size: THUMBNAIL)
          }
          price(format: FORMATTED)
          productsKP {
            godVypuska
            mestonahozhdenie
            telezhka
            tolshhinaOboda
          }
          stockQuantity
          shortDescription(format: RENDERED)
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
`;
