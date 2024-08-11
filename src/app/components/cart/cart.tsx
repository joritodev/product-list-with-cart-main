"use client"
import { useState } from "react";
import "./cart.scss";
import { ProductCart } from "../product-cart/product-cart";
export function Cart() {
  const [cart, setCart] = useState([]);

  return (
    <div className="box">
      <h2>
        Your Cart (<span>0</span>)
      </h2>
      {cart.map((item) => (
        <ProductCart />
      ))}
      {cart.length === 0 && (
        <>
          <div className="emptyCartDetail">
            <img src="illustration-empty-cart.svg" alt="Empty Cart" />
            <p>Your added items will appear here</p>
          </div>
        </>
      )}
    </div>
  );
}
