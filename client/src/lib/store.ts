import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PRODUCTS as INITIAL_PRODUCTS } from './data';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image?: string;
  description?: string;
  stock?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: () => number;
  totalPrice: () => number;
  // Admin functions
  updateProduct: (productId: string, updates: Partial<Product>) => void;
  addProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  getProduct: (productId: string) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      products: INITIAL_PRODUCTS,
      addToCart: (product) => {
        const items = get().items;
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (productId) => {
        set({ items: get().items.filter((item) => item.id !== productId) });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      itemCount: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
      totalPrice: () => get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
      
      // Admin functions
      updateProduct: (productId, updates) => {
        set({
          products: get().products.map((p) =>
            p.id === productId ? { ...p, ...updates } : p
          ),
        });
      },
      addProduct: (product) => {
        set({ products: [...get().products, product] });
      },
      deleteProduct: (productId) => {
        set({ products: get().products.filter((p) => p.id !== productId) });
      },
      getProduct: (productId) => {
        return get().products.find((p) => p.id === productId);
      },
      getProductsByCategory: (category) => {
        return get().products.filter((p) => p.category === category);
      },
    }),
    {
      name: 'grupo-carpo-cart',
    }
  )
);
