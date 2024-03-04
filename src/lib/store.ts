// import  {create, SetState } from 'zustand';
// import { Product } from './data';
// type StoreState = {
//     cart: Product[];
//     addToCart: (item: Product) => void;
//     removeFromCart: (id: number) => void;
// };

// export const useStore = create<StoreState>((set: SetState<StoreState>) => ({
//     cart: [],
//     addToCart: (item: Product) => set(state => ({ cart: [...state.cart, item] })),
//     removeFromCart: (id: number) => set(state => ({ cart: state.cart.filter(item => item.id !== id) })),
// }));


import  {create, SetState } from 'zustand';
import { Product } from './data';

type StoreState = {
    cart: { product: Product, quantity: number }[];
    addToCart: (item: Product) => void;
    removeFromCart: (id: number) => void;
};

export const useStore = create<StoreState>((set: SetState<StoreState>) => ({
    cart: [],
    addToCart: (item: Product) => set(state => {
        const existing = state.cart.find(i => i.product.id === item.id);
        if (existing) {
            return {
                cart: state.cart.map(i => {
                    if (i.product.id === item.id) {
                        return { ...i, quantity: i.quantity + 1 };
                    }
                    return i;
                })
            }
        }

        return { cart: [...state.cart, { product: item, quantity: 1 }] };
    }),
    removeFromCart: (id: number) => set(state => ({ cart: state.cart.filter(item => item.product.id !== id) })),
}));