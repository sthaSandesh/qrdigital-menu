"use client";
import React from "react";
import { useStore } from "@/lib/store"; // import the store
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@edge-ui/react";

export default function Cart() {
  const { cart } = useStore(); // access the cart from the store

  // Calculate the total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="padx">
      <Table>
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
            <TableRow key={item.product.id}>
              <TableCell className="font-medium">{item.product.id}</TableCell>
              <TableCell>{item.product.tittle}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell className="text-right">
                {item.product.price * item.quantity}.00
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">Rs.{totalPrice}.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
