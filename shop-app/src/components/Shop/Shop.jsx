import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "..//..//config";
import Spinner from "..//Spinner/Spinner";
import GoodsList from "../GoodsList/GoodsList";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ShoppingList from "../ShoppingList/ShoppingList";


const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isShoppingCartShow, setShoppingCartShow] = useState(false);

  const getToShoppingCart = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  const handleShoppingCartShow = () => {
    setShoppingCartShow(!isShoppingCartShow);
  };

  const removeShoppingItem = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <GoodsList goods={goods} getToShoppingCart={getToShoppingCart} />
      )}
      <ShoppingCart
        quantity={order.length}
        handleShoppingCartShow={handleShoppingCartShow}
      />
      {isShoppingCartShow && (
        <ShoppingList
          order={order}
          handleShoppingCartShow={handleShoppingCartShow}
          removeShoppingItem={removeShoppingItem}
        />
      )}
    </div>
  );
};

export default Shop;
