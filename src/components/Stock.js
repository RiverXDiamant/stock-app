// import component

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import stocks from "./stock-data";

export default function Stock() {
  const [stock, setStock] = useState(null);
  const { symbol } = useParams();

  useEffect(() => {
    const getStock = async () => {
      try {
        const data = stocks.find((theStock) => theStock.symbol === symbol);
        setStock(data);
      } catch (err) {
        console.error(err);
      }
    };

    getStock();
  }, [symbol]);

  const loaded = () => {
    return (
      <div>
        <h2>
          {stock.name} / {stock.symbol}
        </h2>
        <h3>${stock.lastPrice}</h3>
      </div>
    );
  };

  const loading = () => {
    return <h1>...Loading...</h1>;
  };

  return stock && stock.name ? loaded() : loading();
}
