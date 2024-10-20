"use client";
import Image from "next/image";
import Logo from "@/images/logo.png";
import Search from "@/icons/search.svg";
import Cart from "@/icons/cart.svg";
import { useRouter } from "next/navigation";
import { useProductCartStore } from "@/app/_store/cartStore";
import { useSearch } from "@/app/_store/searchStore";
import { ChangeEvent } from "react";

function HeaderBar() {
  const router = useRouter();
  const { cart } = useProductCartStore();
  const { searchName, setSearchName } = useSearch();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchName(e.target.value);
  };

  return (
    <nav className="bg-white w-full h-[80px] flex items-center">
      <div className="w-9/12 flex items-center justify-between mx-auto">
        <Image
          src={Logo}
          alt="Capputeeno Logo"
          width={220}
          height={80}
          onClick={() => {
            router.push("/");
          }}
          className="hover:cursor-pointer"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between bg-[#F3F5F6] rounded px-4 py-3 gap-6 mr-4">
            <input
              id="search"
              name="search"
              value={searchName}
              onChange={handleSearchChange}
              placeholder="Procurando por algo específico?"
              className="border-none bg-transparent text-gray-600 w-80"
            />
            <button>
              <Image
                src={Search}
                alt="Icone de buscar"
                width={24}
                height={24}
              />
            </button>
          </div>
          <button
            className="relative inline-flex items-center"
            onClick={() => router.push("/cart")}
          >
            <Image
              src={Cart}
              alt="Icone de carrinho de compras"
              width={24}
              height={24}
            />
            {!!cart.length && (
              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-1 border-white rounded-full -top-2 -end-2 dark:border-gray-900 text-[12px]">
                {cart.length}
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HeaderBar;
