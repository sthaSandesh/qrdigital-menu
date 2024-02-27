// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import items from "@/lib/data";
// import {
//   Button,
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@edge-ui/react";

// export default function Home() {
//   const foodCategory = "FOOD";
//   const beverageCategory = "Bevarage";

//   const filteredFood = items
//     .filter((item) => item.category === foodCategory)
//     .map((item) => ({ subCategory: item.SubCategory, img: item.img }));

//   const filteredBeverage = items
//     .filter((item) => item.category === beverageCategory)
//     .map((item) => ({ subCategory: item.SubCategory, img: item.img }));

//   const [currentCategory, setCurrentCategory] = useState(foodCategory);

//   const handleClick = (category: string) => {
//     setCurrentCategory(category);
//   };

//   const filteredItems =
//     currentCategory === foodCategory ? filteredFood : filteredBeverage;

//   return (
//     <div className="padx">
//       <div className="flex space-x-5 py-4 text-center">
//         <Button
//           size="sm"
//           className="w-20"
//           onClick={() => handleClick(foodCategory)}
//         >
//           Food
//         </Button>
//         <Button
//           size="sm"
//           className="w-20"
//           onClick={() => handleClick(beverageCategory)}
//         >
//           Beverage
//         </Button>
//       </div>

//       <div className="grid grid-cols-2 gap-4 text-center">
//         {filteredItems.map((item, index) => (
//           <div key={index}>
//             <Card className="h-50">
//               <CardHeader>
//                 <Image
//                   src={item.img}
//                   alt={item.subCategory}
//                   width={20}
//                   height={20}
//                 />
//                 <CardTitle>{item.subCategory}</CardTitle>
//               </CardHeader>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import items from "@/lib/data";
import {
  Button,
  Card,
  CardTitle,
} from "@edge-ui/react";

export default function Home() {
  const foodCategory = "FOOD";
  const beverageCategory = "Bevarage";

  const filteredFood = items
    .filter((item) => item.category === foodCategory)
    .reduce((acc: { subCategory: string; img: string }[], item) => {
      if (!acc.find((i) => i.subCategory === item.SubCategory)) {
        acc.push({ subCategory: item.SubCategory, img: item.img });
      }
      return acc;
    }, []);

  const filteredBeverage = items
    .filter((item) => item.category === beverageCategory)
    .reduce((acc: { subCategory: string; img: string }[], item) => {
      if (!acc.find((i) => i.subCategory === item.SubCategory)) {
        acc.push({ subCategory: item.SubCategory, img: item.img });
      }
      return acc;
    }, []);

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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
        {filteredItems.map((item, index) => (
          <div key={index}    
          >
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
          </div>
        ))}
      </div>
    </div>
  );
}
