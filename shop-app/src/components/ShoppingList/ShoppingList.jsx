import React from "react";

const ShoppingList = (props) => {
  const { order } = props;

  return (
    <ol className="list-group list-group-numbered">
      <li className="list-group-item list-group-item-dark">Cart:</li>
      
      <li className="list-group-item list-group-item-dark">Total:</li>
    </ol>
  );
};

export default ShoppingList;
