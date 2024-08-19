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
  addItem: (newItem) => set((state) => {
    const existingItem = state.items.find(item => item.id === newItem.id);

    if (existingItem) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      return {
        items: state.items.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        ),
      };
    } else {
      // Si el producto no está en el carrito, agrégalo
      return { items: [...state.items, newItem] };
    }
  }),
  removeItem: (id: string) => set(state => ({ items: state.items.filter(item => item.id !== id) })),
  updateItemQuantity: (id: string, quantity: number) => set(state => ({
    items: state.items.map(item =>
      item.id === id ? { ...item, quantity } : item
    ),
  })),
  clearCart: () => set({ items: [] }),
}));
