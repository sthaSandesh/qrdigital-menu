"use client";
import { useState } from "react";
import Image from "next/image";
import items from "@/lib/data";
import { Button, Card, CardTitle } from "@edge-ui/react";
import Link from "next/link";

export default function Home() {
  const foodCategory = "FOOD";
  const beverageCategory = "Bevarage";

  const filteredFood = items
    .filter((item) => item.category === foodCategory)
    .reduce(
      (acc: { subCategory: string; img: string; href: string }[], item) => {
        if (!acc.find((i) => i.subCategory === item.SubCategory)) {
          acc.push({
            subCategory: item.SubCategory,
            img: item.img,
            href: item.link,
          });
        }
        return acc;
      },
      []
    );

  const filteredBeverage = items
    .filter((item) => item.category === beverageCategory)
    .reduce(
      (acc: { subCategory: string; img: string; href: string }[], item) => {
        if (!acc.find((i) => i.subCategory === item.SubCategory)) {
          acc.push({
            subCategory: item.SubCategory,
            img: item.img,
            href: item.link,
          });
        }
        return acc;
      },
      []
    );

  const [currentCategory, setCurrentCategory] = useState(foodCategory);

  const handleClick = (category: string) => {
    setCurrentCategory(category);
  };

  const filteredItems =
    currentCategory === foodCategory ? filteredFood : filteredBeverage;

  return (
    <div className="padx h-screen">
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 text-center">
        {filteredItems.map((item, index) => (
          <Link href={`product/${item.href}`} key={index}>
            <Card className="h-50 dark:bg-white dark:text-gray-500">
              <div className="relative overflow-hidden ">
                <Image
                  src={item.img}
                  alt={item.subCategory}
                  width={200}
                  height={100}
                  priority
                  objectFit="cover"
                  className="max-h-[120px] h-[120px] rounded-t-xl w-full"
                />
              </div>
              <CardTitle className="py-2">{item.subCategory}</CardTitle>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
