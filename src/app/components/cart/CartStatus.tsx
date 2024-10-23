import { Product } from "@/app/types/product";

function CartStatus({ products }: { products: Product[] }) {
  const totalLength = products.length;
  const totalValue = products.reduce((acc, item) => acc + Number(item.price), 0);

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
