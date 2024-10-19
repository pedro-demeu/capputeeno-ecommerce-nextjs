"use client";
import { Product } from "@/app/types/product";
import HeaderBar from "../layout/HeaderBar";
import Image from "next/image";
import BackButton from "../common/BackButton";
import ProductDetails from "@/app/product/[slug]/ProductDetails";
import { useRouter } from "next/navigation";

function ProductView({ product }: { product: Product }) {
  const router = useRouter();
  return (
    <div className="bg-[#F3F5F6] h-[100vh]">
      <HeaderBar />
      <div className="w-9/12 mx-auto flex flex-col justify-between gap-2">
        <BackButton onBack={() => router.push("/")} />

        <div className="flex items-stretch gap-10 justify-center h-100">
          {/* <div className="h-[500px] w-[1200px] bg-white" /> */}
          <Image
            src={product.src}
            alt={product.description}
            width={740}
            height={540}
            className="rounded-md"
          />

          <div className="flex flex-col items-start gap-4 justify-between">
            <ProductDetails product={product} />
            <button className="bg-sky-700 w-full text-white uppercase px-8 rounded-sm shadow py-2">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
