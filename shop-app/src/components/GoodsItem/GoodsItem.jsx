import React from "react";

const GoodsItem = (props) => {
  const {
    id,
    name,
    description,
    price,
    full_background,
    getToShoppingCart = Function.prototype,
  } = props;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={full_background} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title text-dark">{name}</h5>
          <p className="card-text text-dark">{description}</p>
          <span className="text-dark fw-bold fs-5">{price} $</span>
        </div>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() =>
            getToShoppingCart({
              id,
              name,
              price,
            })
          }
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default GoodsItem;
