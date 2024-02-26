"use client";
import { useState } from "react";
import Image from "next/image";
import items from "@/lib/data";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@edge-ui/react";

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
      <div className="flex space-x-5 py-4 text-center">
        <Button
          size="sm"
          className="w-20"
          onClick={() => handleClick(foodCategory)}
        >
          Food
        </Button>
        <Button
          size="sm"
          className="w-20"
          onClick={() => handleClick(beverageCategory)}
        >
          Beverage
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        {filteredItems.map((item, index) => (
          <div key={index}>
            <Card>
              <CardHeader>
                <Image
                  src="/images/food.jpg"
                  alt="food"
                  width={100}
                  height={100}
                  />
                <CardTitle>{item}</CardTitle>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
