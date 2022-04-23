import React from "react";

const ShoppingItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeShoppingItem = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <div>
      <li className="list-group-item">
        {name}
        <i className="bi bi-dash" onClick={() => decQuantity(id)}></i>x
        {quantity}
        <i className="bi bi-plus" onClick={() => incQuantity(id)}></i> ={" "}
        {price * quantity} $
        <span onClick={() => removeShoppingItem(id)}>
          <i className="bi bi-x close__item"></i>
        </span>
      </li>
    </div>
  );
};

export default ShoppingItem;
