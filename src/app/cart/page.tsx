"use client";
import React from "react";
import { useStore } from "@/lib/store"; // import the store
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@edge-ui/react";

export default function Cart() {
  const { cart } = useStore(); // access the cart from the store

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="padx"><Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>Item name</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {cart.map((item) => (
        <TableRow key={item.id}>
        <TableCell className="font-medium">{item.id}</TableCell>
        <TableCell>{item.tittle}</TableCell>
        <TableCell>{item.quantity}</TableCell>
        <TableCell className="text-right">${item.price}</TableCell>
      </TableRow>
      ))}
    </TableBody><TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">${totalPrice}</TableCell>
            </TableRow>
          </TableFooter>
  </Table>
  
      {/* <table>
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
              <td>1</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Price: {totalPrice}</p> */}

    </div>
  );
}
