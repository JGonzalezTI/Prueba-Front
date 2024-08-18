import {create }from 'zustand';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void
  clearCart: () => void;
};

export const useCartStore = create<CartStore>(set => ({
  items: [],
  addItem: (item: CartItem) => set(state => ({ items: [...state.items, item] })),
  removeItem: (id: string) => set(state => ({ items: state.items.filter(item => item.id !== id) })),
  updateItemQuantity: (id: string, quantity: number) => set(state => ({
    items: state.items.map(item =>
      item.id === id ? { ...item, quantity } : item
    ),
  })),
  clearCart: () => set({ items: [] }),
}));
