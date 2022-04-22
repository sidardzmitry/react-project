import React from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

const ShoppingList = (props) => {
  const {
    order = [],
    handleShoppingCartShow = Function.prototype,
    removeShoppingItem = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className="list-group shopping__list">
      <li className="list-group-item list-group-item-dark">Basket</li>
      {order.length ? (
        order.map((item) => (
          <ShoppingItem
            key={item.id}
            removeShoppingItem={removeShoppingItem}
            {...item}
          />
        ))
      ) : (
        <h3>cart is empty</h3>
      )}
      <li className="list-group-item list-group-item-dark">
        Total: {totalPrice} $
      </li>
      <i
        className="bi bi-x-square icon__close"
        onClick={handleShoppingCartShow}
      ></i>
    </ul>
  );
};

export default ShoppingList;
