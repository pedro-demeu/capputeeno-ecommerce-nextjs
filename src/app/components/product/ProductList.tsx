"use client";

import { useSelectOrdenation } from "@/app/_store/selectOrdenationStore";
import { useActiveTab } from "@/app/_store/tabStore";
import { Product } from "@/app/types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ProductList({ products }: { products: Product[] }) {
  const router = useRouter();
  const { activeTab } = useActiveTab();
  const { selectedValue } = useSelectOrdenation();

  const handleClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <>
      {products
        .filter((_product) => {
          if (activeTab === "all") return 1;
          return _product.tag === activeTab;
        })
        .sort((a, b) => {
          if (selectedValue === "newest") {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return new Date(b.date) - new Date(a.date);
          }

          if (selectedValue === "best_sellers") {
            return b.sales - a.sales;
          }

          if (selectedValue === "price_desc") {
            return b.price - a.price;
          }

          if (selectedValue === "price_asc") {
            return a.price - b.price;
          }

          return 0;
        })
        .map(({ id, title, price, src }) => (
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
