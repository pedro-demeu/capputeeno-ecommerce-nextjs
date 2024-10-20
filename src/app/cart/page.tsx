"use client";
import HeaderBar from "@/app/components/layout/HeaderBar";
import { useProductCartStore } from "../_store/cartStore";
import BackButton from "../components/common/BackButton";
import { useRouter } from "next/navigation";
import CartStatus from "../components/cart/CartStatus";
import ProductListDetailed from "../components/product/ProductListDetailed";

function CartViewPage() {
  const { cart, removeProduct } = useProductCartStore();
  const router = useRouter();

  return (
    <div className="bg-[#F3F5F6]">
      <HeaderBar />

      <div className="w-9/12 mx-auto flex flex-col justify-between items-start gap-3">
        <div className="my-6 block">
          <BackButton onBack={() => router.push("/")} />
        </div>
        {!!cart.length ? (
          <div className="flex gap-10 items-start">
            <div className="flex flex-col gap-4">
              <CartStatus />
              <ProductListDetailed products={cart} onRemove={removeProduct} />
            </div>
            <div className="w-full max-w-[200px]">
              <div className="fixed bg-white rounded-md px-4">
                <h2 className="text-2xl">Resumo do Pedido</h2>

                <div className="my-2 flex gap-24 justify-between text-gray-500">
                  <p>Subtotal de produtos</p>
                  <p>R$ 150,00</p>
                </div>

                <div className="my-2 flex justify-between text-gray-500">
                  <p>Entrega</p>
                  <p>R$ 50,00</p>
                </div>

                <div className="w-full border bg-slate-300" />
                <div className="my-2 flex justify-between text-gray-500 font-bold">
                  <p>Total</p>
                  <p>R$ 200,00</p>
                </div>

                <button className="bg-green-600 hover:bg-green-500 transition-all text-white rounded w-full py-2 mb-6">
                  Finalizar a compra
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-[calc(100vh-80px)] justify-center items-center w-full">
            <p>Não há itens no carrinho</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartViewPage;
