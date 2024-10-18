import Image from "next/image";
import Logo from "@/images/logo.png";
import Search from "@/icons/search.svg";
import Cart from "@/icons/cart.svg";

function HeaderBar() {
  return (
    <nav className="bg-white w-full h-[80px] flex items-center">
      <div className="w-9/12 flex items-center justify-between mx-auto">
        <Image src={Logo} alt="Capputeeno Logo" width={220} height={80} />

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between bg-[#F3F5F6] rounded px-4 py-3 gap-6 mr-4">
            <input
              id="search"
              name="search"
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
          <button>
            <Image
              src={Cart}
              alt="Icone de carrinho de compras"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HeaderBar;
