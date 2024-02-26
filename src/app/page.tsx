"use client";
import { useState } from "react";
import Image from "next/image";
import items from "@/lib/data";

export default function Home() {
  const foodCategory = "FOOD";
  const beverageCategory = "Bevarage";

  const filteredFood = [
    ...new Set(
      items
        .filter((item) => item.category === foodCategory)
        .map((item) => item.SubCategory)
    ),
  ];

  const filteredBeverage = [
    ...new Set(
      items
        .filter((item) => item.category === beverageCategory)
        .map((item) => item.SubCategory)
    ),
  ];

  const [currentCategory, setCurrentCategory] = useState(foodCategory);

  const handleClick = (category: string) => {
    setCurrentCategory(category);
  };

  const filteredItems =
    currentCategory === foodCategory ? filteredFood : filteredBeverage;

  return (
    <div className="padx">
      <div className="flex space-x-5 py-4">
        <button
          className="bg-gray-200"
          onClick={() => handleClick(foodCategory)}
        >
          Food
        </button>
        <button onClick={() => handleClick(beverageCategory)}>Beverage</button>
      </div>
      <div>
        {filteredItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
