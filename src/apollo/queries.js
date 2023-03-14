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
          telega
          man1
          man2
          man3
          man4
          man5
        }
      }
    }
  }
`;

export const GET_TESTIMONIALS = gql`
  query getTestimonialsQuery {
    posts(
      where: { categoryId: 60, orderby: { field: DATE, order: ASC } }
      last: 10
    ) {
      nodes {
        title
        testimonials {
          imagelink {
            sourceUrl
          }
          pdf {
            mediaItemUrl
          }
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
            productTags {
              nodes {
                name
              }
            }
            productCategories {
              nodes {
                name
              }
            }
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

export const GET_ALL_PARTS_PRE = gql`
  query GetAllParts($after: String, $before: String, $first: Int, $last: Int) {
    products(
      where: { categoryIdIn: [65] }
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
            productTags {
              nodes {
                name
              }
            }
            productCategories {
              nodes {
                name
              }
            }
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

export const GET_TAGS_BY_CAT_ID = gql`
  query getTagsByCatId($categoryIdIn: [Int]) {
    products(where: { categoryIdIn: $categoryIdIn }, first: 100) {
      edges {
        node {
          productTags {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_STATIONS_BY_SLUG = gql`
  query getContentQuery($categoryIdIn: [Int], $tagIn: [String]) {
    products(where: { categoryIdIn: $categoryIdIn, tagIn: $tagIn }) {
      edges {
        node {
          productsKP {
            mestonahozhdenie
          }
        }
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
            productTags {
              nodes {
                name
              }
            }
            productCategories {
              nodes {
                name
              }
            }
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
