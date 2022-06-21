import React from "react";
import { gql, useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PopupItemCat = ({ id, name, slug }) => {
  const GET_TOTAL = gql`
    query GetAllPartsCount($tagIn: [String], $id: [Int]) {
      products(where: { categoryIdIn: $id, tagIn: $tagIn }) {
        pageInfo {
          total
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_TOTAL, {
    variables: { tagIn: slug, id },
  });

  if (error) console.log(error);
  return (
    <div>
      {loading ? (
        <div className="catItem">
          <Skeleton />
        </div>
      ) : (
        data?.products && (
          <div className="catItem">
            {name} -{" "}
            {data.products.pageInfo.total === 0 ? (
              <span className="black">по запросу</span>
            ) : (
              <span className="green">{data.products.pageInfo.total}</span>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default PopupItemCat;
