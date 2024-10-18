"use client";

function ProductDetail() {
  const mock = {
    id: 1,
    type: "Caneca",
    title: "Caneca de cerâmica rústica",
    price: 40.0,
    description:
      "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
  };
  return (
    <div className="flex flex-col w-full">
      <p className="text-lg font-light mb-3">{mock.type}</p>

      <h2 className="text-3xl font-light mb-3">{mock.title}</h2>

      <p className="text-lg font-bold mb-3">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(mock.price)}
      </p>

      <p className="mb-10 text-gray-600 text-sm">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>

      <h3 className=" text-gray-500 font-normal uppercase mb-2">Descrição</h3>
      <p className="text-justify text-sm">{mock.description}</p>
    </div>
  );
}

export default ProductDetail;
