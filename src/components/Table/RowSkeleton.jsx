import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RowSkeleton = () => {
  return (
    <div>
      <div className="row result-row">
        <div className="d_f col-4 m-col-4 xs-col-4">
          <div className="img">
            <Skeleton className="skeleton_rows_image" />
          </div>
          <div className="name-w">
            <div className="name">
              {" "}
              <Skeleton />
            </div>
            <div className="description">
              <Skeleton count={2} />
            </div>
          </div>
        </div>
        <div className="col-4 m-col-4 xs-col-4 | minirow-w">
          <div className="d_f | minirow">
            <div className="left">
              {" "}
              <Skeleton />
            </div>
            <div className="right">
              <Skeleton />
            </div>
          </div>
          <div className="d_f | minirow">
            <div className="left">
              {" "}
              <Skeleton />
            </div>
            <div className="right">
              {" "}
              <Skeleton />
            </div>
          </div>
          <div className="d_f | minirow">
            <div className="left">
              {" "}
              <Skeleton />
            </div>
            <div className="right">
              {" "}
              <Skeleton />
            </div>
          </div>
        </div>
        <div className="d_f fd_c ai_end col-4 m-col-4 xs-col-4 | price_block">
          <div className="price">
            {" "}
            <Skeleton width={105} height={30} />
          </div>
          <div className="btn-w">
            <Skeleton className="skeleton_rows_button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowSkeleton;
