import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Spinner = ({loading}) => {
  return <PuffLoader color="#1f2937" size={80} speedMultiplier={1} loading={loading} />;
};

export default Spinner;
