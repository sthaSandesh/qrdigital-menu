export interface Product{
    id  : number;
    tittle : string;
    category : string;
    SubCategory : string;
    price : number;
    quantity : number;
}


const items : Product[] = [
    {
        id : 1,
        tittle : "Chi Steam Momo",
        category : "FOOD",
        SubCategory : "Momo",
        price : 100,
        quantity : 1,
    },
    {
        id : 2,
        tittle : "Chi Fry Momo",
        category : "FOOD",
        SubCategory : "Momo",
        price : 150,
        quantity : 1,
    },
    {
        id : 3,
        tittle : "Chi C Momo",
        category : "FOOD",
        SubCategory : "Momo",
        price : 200,
        quantity : 1,
    },
    {
        id : 4,
        tittle : "Chi Jhol Momo",
        category : "FOOD",
        SubCategory : "Momo",
        price : 250,
        quantity : 1,
    },
    {
        id : 5,
        tittle : "Chicken Chowmein",
        category : "FOOD",
        SubCategory : "Chowmein",
        price : 100,
        quantity : 1,
    },
    {
        id : 6,
        tittle : "Buff Chowmein",
        category : "FOOD",
        SubCategory : "Chowmein",
        price : 90,
        quantity : 1,
    },
    {
        id : 7,
        tittle : "Veg Chowmein",
        category : "FOOD",
        SubCategory : "Chowmein",
        price : 80,
        quantity : 1,
    },
    {
        id : 8,
        tittle : "Egg Chowmein",
        category : "FOOD",
        SubCategory : "Chowmein",
        price : 85,
        quantity : 1,
    },
    {
        id : 9,
        tittle : "American Chopsuey",
        category : "FOOD",
        SubCategory : "Chopsuey",
        price : 360,
        quantity : 1,
    },
    {
        id : 10,
        tittle : "Chinese Chopsuey",
        category : "FOOD",
        SubCategory : "Chopsuey",
        price : 300,
        quantity : 1,
    }
]