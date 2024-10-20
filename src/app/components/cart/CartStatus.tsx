import { useProductCartStore } from "@/app/_store/cartStore";

function CartStatus() {
  const { cart } = useProductCartStore();

  const totalLength = cart.length;
  const totalValue = cart.reduce((acc, item) => acc + Number(item.price), 0);

  console.log({
    cart,
    totalLength,
    totalValue
  })
  return (
    <div className="m-2">
      <h2 className="uppercase text-2xl">Seu carrinho</h2>
      <p className="font-light">
        {`Total (${
          totalLength === 1 ? "1 Produto" : `${totalLength} Produtos`
        })`}
        <span className="font-bold ml-4">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(totalValue)}
        </span>
      </p>
    </div>
  );
}

export default CartStatus;
