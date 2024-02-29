"use client";
import { Product_category } from "@/lib/constant";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import items from "@/lib/data"; // import your data
import { Button, Card } from "@edge-ui/react";
import { useStore } from "@/lib/store";

export default function ProductList() {
  //extract route
  const router = usePathname();

  const {  addToCart } = useStore();



  //split route to get the last part
  const split_router = router.split("/");
  const extracted_route = split_router[split_router.length - 1];

  console.log(extracted_route);

  //extracted_route= momo || chowmein || etc
  //filter the data based on the route
  const filtered_data = items.filter(
    (item) => item.link.toLowerCase() === extracted_route.toLowerCase()
  );
  console.log(filtered_data);

  return (
    <>
      <div className="padx">
        {/* display the filtered data */}
        {filtered_data?.map((item) => {
          return (
            <div key={item.id}>
              <Card className="flex justify-between items-center px-2 my-2 ">
                <div>
                  <p>{item.tittle}</p>
                  <p>{item.price}</p>
                </div>
                <Button size="sm" onClick={() => addToCart(item)}>
                  Add to Cart{" "}
                </Button>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
