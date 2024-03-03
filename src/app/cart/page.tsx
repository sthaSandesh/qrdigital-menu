"use client";
import React from "react";
import { useStore } from "@/lib/store"; // import the store

export default function Cart() {
  const { cart } = useStore(); // access the cart from the store

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="padx">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.tittle}</td>
              <td>1</td> {/* Replace with actual quantity if available */}
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}
