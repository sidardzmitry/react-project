import React from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

const ShoppingList = (props) => {
  const { order = []} = props;

  return (
    <ol className="list-group list-group-numbered">
      <li className="list-group-item list-group-item-dark">Cart:</li>
      {
        order.length ? order.map(item => (
            <ShoppingItem key={item.id} {...item} />
        )) : <h3>cart is empty</h3>
      }
      <li className="list-group-item list-group-item-dark">Total:</li>
    </ol>
  );
};

export default ShoppingList;
