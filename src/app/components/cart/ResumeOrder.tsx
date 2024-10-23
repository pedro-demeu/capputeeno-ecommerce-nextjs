import { useProductCartStore } from "@/app/_store/cartStore";
import R$ from "../common/R$";

function CartResume() {
  const { cart } = useProductCartStore();

  const freightTax = 50.0;
  const subTotalProducts = cart.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );
  const totalValue = freightTax + subTotalProducts;

  return (
    <div className="fixed bg-white rounded-md px-4">
      <h2 className="text-2xl">Resumo do Pedido</h2>

      <div className="my-2 flex gap-24 justify-between text-gray-500">
        <p>Subtotal de produtos</p>
        <R$ value={subTotalProducts} />
      </div>

      <div className="my-2 flex justify-between text-gray-500">
        <p>Entrega</p>
        <R$ value={freightTax} />
      </div>

      <div className="w-full border bg-slate-300" />
      <div className="my-2 flex justify-between text-gray-500 font-bold">
        <p>Total</p>
        <p>
          <R$ value={totalValue} />
        </p>
      </div>

      <button className="bg-green-600 hover:bg-green-500 transition-all text-white rounded w-full py-2 mb-6">
        Finalizar a compra
      </button>
    </div>
  );
}

export default CartResume;
