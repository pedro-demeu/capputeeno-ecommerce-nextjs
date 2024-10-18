import BackIcon from "@/icons/back.svg";
import HeaderBar from "@/app/components/layout/HeaderBar";
import Image from "next/image";
import ProductDetails from "./ProductDetails";

function ProductDetailPage() {
  const mock = {
    id: 1,
    type: "Caneca",
    title: "Caneca de cerâmica rústica",
    price: 40.0,
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
  };
  return (
    <div className="bg-[#F3F5F6] h-[100vh]">
      <HeaderBar />
      <div className="w-9/12 mx-auto flex flex-col justify-between gap-2">
        <button className="flex items-center gap-2 my-8">
          <Image
            src={BackIcon}
            alt="Clique para voltar"
            width={24}
            height={24}
          />
          <p>Voltar</p>
        </button>

        <div className="flex items-stretch gap-10 justify-center h-100">
          <div className="h-[500px] w-[1200px] bg-white" />
          {/* <Image
            src="https://picsum.photos/id/740/740/300
"
            alt="Imagem do Produto"
            width={740}
            height={540}
            className="rounded-md"
          /> */}

          <div className="flex flex-col items-start gap-4 justify-between">
            <ProductDetails />
            <button className="bg-sky-700 w-full text-white uppercase px-8 rounded-sm shadow py-2">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
