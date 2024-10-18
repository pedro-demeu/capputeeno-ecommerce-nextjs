"use client";
import Image from "next/image";
import DeleteIcon from "@/icons/delete.svg"
import BackButton from "../common/BackButton";

interface Product {
  id: number;
  src: string;
  title: string;
  description: string;
  price: number;
}
function CartDetails() {
  const products: Product[] = Array.from({ length: 3 }).map((_, index) => {
    const randomId = Math.floor(Math.random() * 1000); // Gera um ID aleatório para pegar a imagem

    return {
      id: Math.abs(Math.random()),
      title: `Caneca de cerâmica rústica ${randomId}`,
      price: Number(randomId),
      src: `https://picsum.photos/id/${index + 1}/400/200`,
      description: "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
    };
  });

  return (
    <div className="h-full">
      <BackButton />
      <div className="mb-4">
        <h2 className="uppercase text-2xl">Seu carrinho</h2>
        <p className="font-light">
          Total (5 produtos)<span className="font-bold"> R$ 40,00</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
      {products.map((product) => (
        <div key={product.id} className="flex gap-5 w-full">
          <Image
            alt={product.description}
            src={product.src}
            width={300}
            height={300}
            className="rounded"
          />

          <div className="w-full py-5 pr-4 flex flex-col justify-between">
            <div className="flex justify-between mb-4">
              <h3 className="text-2xl font-light">{product.title}</h3>
              <button>
                <Image
                  src={DeleteIcon}
                  alt="delete"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <p>{product.description}</p>

            <div className="flex justify-between mt-6">
              <select className="px-3 py-2 rounded border border-gray-300">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>

              <p className="font-bold">R$ {product.price}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default CartDetails;
