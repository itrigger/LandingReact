import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RowSkeleton = () => {
  return (
    <tr className="result-row-2">
      <td className="name-w">
        <Skeleton height={30} />
      </td>
    </tr>
  );
};

export default RowSkeleton;
