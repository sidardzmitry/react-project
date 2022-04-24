import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border size__spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
