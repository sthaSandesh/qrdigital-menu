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
  Button,
} from "@edge-ui/react";
import { MdDelete } from "react-icons/md";

export default function Cart() {
  const { cart, removeFromCart } = useStore(); // access the cart and removeFromCart from the store

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
            <TableHead>Remove</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.product.id}>
              <TableCell className="font-medium">{item.product.id}</TableCell>
              <TableCell>{item.product.tittle}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>
                <Button onClick={() => removeFromCart(item.product.id)}>
                  <MdDelete />
                </Button>
              </TableCell>
              <TableCell className="text-right">
                {item.product.price * item.quantity}.00
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">Rs.{totalPrice}.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className="flex items-center justify-center py-5">
        <Button>Confirm Order </Button>
      </div>
    </div>
  );
}
