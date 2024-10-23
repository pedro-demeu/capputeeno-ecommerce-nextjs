import Image from "next/image";
import ProductDeleteButton from "../core/ProductDeleteButton";
import { Product } from "@/app/types/product";

function ProductListDetailed({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <div key={product.id} className="flex gap-5 bg-white rounded-lg">
          <Image
            alt={product.description}
            src={product.src}
            width={300}
            height={300}
            className="rounded-l-lg rounded-bl-lg"
          />

          <div className="py-5 pr-4 flex flex-col justify-between">
            <div className="flex justify-between mb-4">
              <h3 className="text-2xl font-light">{product.title}</h3>
              <ProductDeleteButton id={product.id} />
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
  );
}

export default ProductListDetailed;
