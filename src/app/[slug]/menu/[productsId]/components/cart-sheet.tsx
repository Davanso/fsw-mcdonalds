import { useContext } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../../contexts/cart";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetTitle>
        </SheetHeader>
        {products.map((product) => (
          <p key={product.id}>
            {product.name} - {product.quantity}
          </p>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
