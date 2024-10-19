import Image from "next/image";
import DeleteIcon from "@/icons/delete.svg"
import BackButton from "../common/BackButton";
import { Product } from "@/app/types/product";

async function getProducts() {
  const res = await fetch('http://localhost:3001/products');
  const data = await res.json();
  return data;
}

async function CartDetails() {
  const products: Product[] = await getProducts();
  

  return (
    <div className="h-full">
      <BackButton onBack={() => {}} />
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
