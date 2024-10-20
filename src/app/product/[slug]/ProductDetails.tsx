"use client";

import { Product } from "@/app/types/product";

function ProductDetails({ product }: { product: Product }) {
  function getTagTranslate(tag: string) {
    if (tag === "tshirt") return "Camiseta";
    if (tag === "mug") return "Caneca";
    return "Modelo";
  }
  return (
    <div className="flex flex-col w-full">
      <p className="text-md font-light mb-3">{getTagTranslate(product.tag)}</p>

      <h2 className="text-3xl font-light mb-3">{product.title}</h2>

      <p className="text-lg font-bold mb-6">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </p>

      <p className="mb-10 text-gray-600 text-sm font-light">
        *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
        R$900,00.
      </p>

      <h3 className=" text-gray-900 font-light uppercase mb-2">Descrição</h3>
      <p className="text-justify text-gray-700 font-light text-sm">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
