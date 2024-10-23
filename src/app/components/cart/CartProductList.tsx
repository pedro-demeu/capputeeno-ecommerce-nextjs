"use client"
import { useProductCartStore } from "@/app/_store/cartStore";
import ProductListDetailed from "../product/ProductListDetailed";
import CartStatus from "./CartStatus";
import CartResume from "./ResumeOrder";

function CartProductList() {
  const { cart: products } = useProductCartStore();

  if (!products.length)
    return (
      <div className="flex h-[calc(100vh-80px)] justify-center items-center w-full">
        <p>Não há itens no carrinho</p>
      </div>
    );

  return(
    <div className="flex gap-10 items-start">
      <div className="flex flex-col gap-4">
        <CartStatus products={products} />
        <ProductListDetailed products={products} />
      </div>
      <div className="w-full max-w-[200px]">
        <CartResume />
      </div>
    </div>
  );
}

export default CartProductList;
