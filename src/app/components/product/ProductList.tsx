"use client";

import { Product } from "@/app/types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ProductList({ products }: { products: Product[] }) {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <>
      {products.map(({ id, title, price, src }) => (
        <div
          key={id}
          className="gap-4 bg-white rounded"
          onClick={() => handleClick(id)}
        >
          <Image
            src={src}
            alt={title}
            className="object-cover rounded-md"
            height={300}
            width={256}
          />
          <div className="ml-4 mb-4">
            <h3 className="font-sans text-lg mt-2 font-light">{title}</h3>
            <div className="border w-11/12" />
            <p className="text-gray-700 font-bold text-sm">R$ {price}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductList;
