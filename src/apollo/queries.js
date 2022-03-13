import { gql } from "@apollo/client"

export const GET_CONTENT = gql`
    query getContentQuery {
      posts(where: {id: 46}) {
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
`