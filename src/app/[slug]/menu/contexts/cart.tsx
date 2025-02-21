"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

// CartProduct is a type that extends the Product type with a quantity field.
interface CartProduct
  extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  quantity: number;
}

// ICartContext is an interface that defines the shape of the CartContext.
export interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void;
}

// CartContext is a context that provides the cart state and a function to toggle the cart.
export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addProduct: () => {},
});

// CartProvider is a provider that wraps the children with the CartContext.
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const addProduct = (product: CartProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        toggleCart,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
