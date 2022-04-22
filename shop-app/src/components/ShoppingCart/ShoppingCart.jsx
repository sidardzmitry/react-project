import React from "react";

const ShoppingCart = (props) => {
  const { quantity = 0, handleShoppingCartShow = Function.prototype } = props;

  return (
    <div className="shopping__cart" onClick={handleShoppingCartShow}>
      <button type="button" className="btn btn-success position-relative">
        <i className="bi bi-cart"></i>
        {quantity ? (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
            {quantity}
          </span>
        ) : null}
      </button>
    </div>
  );
};

export default ShoppingCart;
