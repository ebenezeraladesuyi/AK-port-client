// import React from "react";

import { RotatingLines } from "react-loader-spinner";

export const DatasIsaLoading = () => {
  return (
    <>
      <RotatingLines
        strokeColor="#00AFEF"
        strokeWidth="5"
        animationDuration="0.75"
        width="30"
        visible={true}
      />
    </>
  );
};
