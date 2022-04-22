import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "..//..//config";
import Spinner from "..//Spinner/Spinner";
import GoodsList from "../GoodsList/GoodsList";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

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
      {loading ? <Spinner /> : <GoodsList goods={goods} />}
      <ShoppingCart quantity={order.length}/>
    </div>
  );
};

export default Shop;
