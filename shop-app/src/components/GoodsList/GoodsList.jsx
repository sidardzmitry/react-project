import React from "react";
import GoodsItem from "../GoodsItem/GoodsItem";

const GoodsList = (props) => {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>product not found</h3>;
  }
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default GoodsList;
