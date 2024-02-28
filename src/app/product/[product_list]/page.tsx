"use client";
import { Product_category } from "@/lib/constant";
import { redirect, usePathname } from "next/navigation";
import React from "react";

export default function ProductList() {
  const path = usePathname();
  const targetProduct = Product_category.find(
    (cat) => cat.href.toLowerCase() === path.toLowerCase()
  );
  if (!targetProduct) redirect("/404");

  return <div className="text-center">Available {targetProduct.lable} items</div>;
}
