"use client";
import { Product } from "@/app/types/product";
import HeaderBar from "../layout/HeaderBar";
import Image from "next/image";
import BackButton from "../common/BackButton";
import ProductDetails from "@/app/product/[slug]/ProductDetails";
import { useRouter } from "next/navigation";
import Cart from "@/icons/cart-white.svg";

function ProductView({ product }: { product: Product }) {
  const router = useRouter();
  return (
    <div className="bg-[#F3F5F6] h-[100vh] ">
      <HeaderBar />
      <div className="w-9/12 mx-auto flex flex-col justify-between gap-2">
        <div className="mt-6 mb-3">
          <BackButton onBack={() => router.push("/")} />
        </div>
        <div className="flex items-stretch gap-10 justify-center">
          <Image
            src={product.src}
            alt={product.description}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "500px"
            }}
            className="rounded-md shadow-lg object-cover"
          />

          <div className="flex flex-col items-start gap-4 justify-between">
            <ProductDetails product={product} />
            <button className="bg-sky-700 hover:bg-sky-500 transition-all w-full flex items-center gap-4 justify-center text-white uppercase px-8 rounded-sm shadow py-2">
              <Image
                src={Cart}
                alt="Carrinho"
                width={24}
                height={24}
                className="rounded-md shadow-lg"
              />
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
