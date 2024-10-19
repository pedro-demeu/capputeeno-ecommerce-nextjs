"use client";

import { Product } from "@/app/types/product";

function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="flex flex-col w-full">
      <p className="text-lg font-light mb-3">{product.tag}</p>

      <h2 className="text-3xl font-light mb-3">{product.title}</h2>

      <p className="text-lg font-bold mb-3">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </p>

      <p className="mb-10 text-gray-600 text-sm">
        *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
        R$900,00.
      </p>

      <h3 className=" text-gray-500 font-normal uppercase mb-2">Descrição</h3>
      <p className="text-justify text-sm">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
