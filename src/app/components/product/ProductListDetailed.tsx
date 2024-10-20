import Image from "next/image";
import { Product } from "@/app/types/product";
import DeleteIcon from "@/icons/delete.svg";

function ProductListDetailed({
  products,
  onRemove,
}: {
  products: Product[];
  onRemove: (productId: number) => void;
}) {

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
              <button onClick={() => onRemove(product.id)}>
                <Image src={DeleteIcon} alt="delete" width={24} height={24} />
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
  );
}

export default ProductListDetailed;
