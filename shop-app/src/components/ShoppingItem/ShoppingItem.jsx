import React from "react";

const ShoppingItem = (props) => {
  const { 
    id, 
    name, 
    price, 
    quantity, 
    removeShoppingItem = Function.prototype,
  } = props;

  return (
    <div>
      <li className="list-group-item">
        {name} x{quantity} = {price * quantity} $
        <span onClick={removeShoppingItem(id)}>
          <i className="bi bi-x close__item"></i>
        </span>
      </li>
    </div>
  );
};

export default ShoppingItem;
