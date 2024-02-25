export interface Product{
    id  : number;
    tittle : string;
    category : string;
    SubCategory : string;
    img : string;
    price : number;
    quantity : 1;
}


const items : Product[] = [
    {
        id : 1,
        tittle : "Chi Steam Momo",
        category : "FOOD",
        SubCategory : "Momo",
        img : "img",
        price : 100,
        quantity : 1,
    },
    {
        id : 2,
        tittle : "Chi Fry Momo",
        category : "FOOD",
        SubCategory : "Momo",
        img : "img",
        price : 150,
        quantity : 1,
    },
    {
        id : 3,
        tittle : "Chi C Momo",
        category : "FOOD",
        SubCategory : "Momo",
        img : "img",
        price : 200,
        quantity : 1,
    },
    {
        id : 4,
        tittle : "Chi Jhol Momo",
        category : "FOOD",
        SubCategory : "Momo",
        img : "img",
        price : 250,
        quantity : 1,
    },
    {
        id : 5,
        tittle : "Chicken Chowmein",
        category : "FOOD",
        SubCategory : "Chowmein",
        img : "img",
        price : 100,
        quantity : 1,
    },
    {
        id : 6,
        tittle : "Buff Chowmein",
        category : "FOOD",
        SubCategory : "Chowmein",
        img : "img",
        price : 90,
        quantity : 1,
    },
    {
        id : 7,
        tittle : "Veg Chowmein",
        category : "FOOD",
        SubCategory : "Chowmein",
        img : "img",
        price : 80,
        quantity : 1,
    },
    {
        id : 8,
        tittle : "Egg Chowmein",
        category : "FOOD",
        SubCategory : "Chowmein",
        img : "img",
        price : 85,
        quantity : 1,
    },
    {
        id : 9,
        tittle : "American Chopsuey",
        category : "FOOD",
        SubCategory : "Chopsuey",
        img : "img",
        price : 360,
        quantity : 1,
    },
    {
        id : 10,
        tittle : "Chinese Chopsuey",
        category : "FOOD",
        SubCategory : "Chopsuey",
        img : "img",
        price : 300,
        quantity : 1,
    },
    {
        id : 11,
        tittle : "American Breakfast",
        category : "FOOD",
        SubCategory : "Breakfast",
        img : "img",
        price : 110,
        quantity : 1,
    },
    {
        id : 12,
        tittle : "Boiled Egg",
        category : "FOOD",
        SubCategory : "Breakfast",
        img : "img",
        price : 250,
        quantity : 1,
    },
    {
        id : 13,
        tittle : "Cornflakes",
        category : "FOOD",
        SubCategory : "Breakfast",
        img : "img",
        price : 300,
        quantity : 1,
    },
    {
        id : 14,
        tittle : "Aalu Jeera",
        category : "FOOD",
        SubCategory : "Veg Snacks",
        img : "img",
        price : 120,
        quantity : 1,
    },
    {
        id : 15,
        tittle : "Aalu Fry",
        category : "FOOD",
        SubCategory : "Veg Snacks",
        img : "img",
        price : 150,
        quantity : 1,
    },
    {
        id : 16,
        tittle : "Aalu Bhujia",
        category : "FOOD",
        SubCategory : "Veg Snacks",
        img : "img",
        price : 250,
        quantity : 1,
    },
    {
        id : 17,
        tittle : "Paneer Chilli",
        category : "FOOD",
        SubCategory : "Veg Snacks",
        img : "img",
        price : 100,
        quantity : 1,
    },
    {
        id : 18,
        tittle : "Paneer Butter Masala",
        category : "FOOD",
        SubCategory : "Veg Snacks",
        img : "img",
        price : 150,
        quantity : 1,
    },
    {
        id : 19,
        tittle : "Paneer Tarkari",
        category : "FOOD",
        SubCategory : "Veg Snacks",
        img : "img",
        price : 200,
        quantity : 1,
    },
    {
        id : 20,
        tittle : "Buff Chhoila",
        category : "FOOD",
        SubCategory : "Non Veg Snacks",
        img : "img",
        price : 250,
        quantity : 1,
    },
    {
        id : 21,
        tittle : "Buff Sekuwa",
        category : "FOOD",
        SubCategory : "Non Veg Snacks",
        img : "img",
        price : 300,
        quantity : 1,
    },
    {
        id : 22,
        tittle : "Buff Chilli",
        category : "FOOD",
        SubCategory : "Non Veg Snacks",
        img : "img",
        price : 350,
        quantity : 1,
    },
    {
        id : 23,
        tittle : "Buff Butter Masala",
        category : "FOOD",
        SubCategory : "Non Veg Snacks",
        img : "img",
        price : 400,
        quantity : 1,
    },
    {
        id : 24,
        tittle : "Buff Tarkari",
        category : "FOOD",
        SubCategory : "Non Veg Snacks",
        img : "img",
        price : 450,
        quantity : 1,
    },
    //food sakyo

    {
        id : 25,
        tittle : "Coca Cola",
        category : "Bevarage",
        SubCategory : "Cold Drinks",
        img : "img",
        price : 100,
        quantity : 1,
    },
    {
        id : 26,
        tittle : "Pepsi",
        category : "Bevarage",
        SubCategory : "Cold Drinks",
        img : "img",
        price : 150,
        quantity : 1,
    },
    {
        id : 27,
        tittle : "Sprite",
        category : "Bevarage",
        SubCategory : "Cold Drinks",
        img : "img",
        price : 250,
        quantity : 1,
    },
    {
        id : 28,
        tittle : "Red Bull",
        category : "Bevarage",
        SubCategory : "Energy Drinks",
        img : "img",
        price : 100,
        quantity : 1,
    },
    {
        id : 29,
        tittle : "Tuborg",
        category : "Bevarage",
        SubCategory : "Beer",
        img : "img",
        price : 200,
        quantity : 1,
    },
    {
        id : 30,
        tittle : "Gorkha",
        category : "Bevarage",
        SubCategory : "Beer",
        img : "img",
        price : 300,
        quantity : 1,
    },
    {
        id : 31,
        tittle : "Carlsberg Beer",
        category : "Bevarage",
        SubCategory : "Beer",
        img : "img",
        price : 400,
        quantity : 1,
    },
    {
        id : 32,
        tittle : "Nepal Ice Beer",
        category : "Bevarage",
        SubCategory : "Beer",
        img : "img",
        price : 500,
        quantity : 1,
    },
    {
        id : 33,
        tittle : "Americano",
        category : "Bevarage",
        SubCategory : "Coffee",
        img : "img",
        price : 100,
        quantity : 1,
    },
    {
        id : 34,
        tittle : "Cappuccino",
        category : "Bevarage",
        SubCategory : "Coffee",
        img : "img",
        price : 150,
        quantity : 1,
    },
    {
        id : 35,
        tittle : "Espresso",
        category : "Bevarage",
        SubCategory : "Coffee",
        img : "img",
        price : 200,
        quantity : 1,
    },
    {
        id: 36,
        tittle : "Latte",
        category : "Bevarage",
        SubCategory : "Coffee",
        img : "img",
        price : 250,
        quantity : 1,
    },
    {
        id : 37,
        tittle : "Red Wine",
        category : "Bevarage",
        SubCategory : "Wine",
        img : "img",
        price : 300,
        quantity : 1,
    },
    {
        id : 38,
        tittle : "White Wine",
        category : "Bevarage",
        SubCategory : "Wine",
        img : "img",
        price : 350,
        quantity : 1,
    }
]