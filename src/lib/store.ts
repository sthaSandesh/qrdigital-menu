import  {create, SetState } from 'zustand';
import { Product } from './data';
type StoreState = {
    cart: Product[];
    addToCart: (item: Product) => void;
    removeFromCart: (id: number) => void;
};

export const useStore = create<StoreState>((set: SetState<StoreState>) => ({
    cart: [],
    addToCart: (item: Product) => set(state => ({ cart: [...state.cart, item] })),
    removeFromCart: (id: number) => set(state => ({ cart: state.cart.filter(item => item.id !== id) })),
}));
