"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

// CartProduct is a type that extends the Product type with a quantity field.
interface CartProduct extends Product {
  quantity: number;
}

// ICartContext is an interface that defines the shape of the CartContext.
export interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  toggleCart: () => void;
}

// CartContext is a context that provides the cart state and a function to toggle the cart.
export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
});

// CartProvider is a provider that wraps the children with the CartContext.
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
