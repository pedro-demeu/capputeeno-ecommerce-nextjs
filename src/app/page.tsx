"use client";
import { useMemo } from "react";
import FeedPagination from "./components/common/FeedPagination";
import Image from "next/image";
import OrderBy from "./components/common/OrderBy";
import TabFilters from "./components/common/TabFilters";
import HeaderBar from "./components/layout/HeaderBar";

// Função para gerar posts aleatórios com imagens da API Lorem Picsum
function generateRandomPosts() {
  const products = [
    { title: "Caneca Super Hero", price: 29.99 },
    { title: "Caneca Vintage", price: 19.99 },
    { title: "Camiseta Estampa Floral", price: 49.99 },
    { title: "Camiseta Anime", price: 59.99 },
    { title: "Caneca Personalizada", price: 24.99 },
    { title: "Camiseta Casual", price: 39.99 },
    { title: "Camiseta Polo", price: 69.99 },
    { title: "Caneca de Cerâmica", price: 14.99 },
  ];

  return Array.from({ length: 25 }).map((_, index) => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomImageId = Math.floor(Math.random() * 1000); // Gera um ID aleatório para pegar a imagem
    return {
      id: index + 1,
      title: randomProduct.title,
      price: randomProduct.price.toFixed(2),
      imageUrl: `https://picsum.photos/id/${randomImageId}/256/300`, // API Lorem Picsum para imagens aleatórias
    };
  });
}

export default function Home() {
  const products = useMemo(() => generateRandomPosts(), []);

  console.log({
    posts: products,
  });
  return (
    <div className="bg-[#F3F5F6]">
      <HeaderBar />

      <div className="w-9/12 mx-auto">
        <section id="filters" className="flex justify-between">
          <TabFilters />
          <OrderBy />
        </section>

        <div className="flex justify-end">
          <FeedPagination />
        </div>

        <section
          id="feed"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
        >
          {products.map(({ id, title, price, imageUrl }) => (
            <div key={id} className="gap-4 bg-white rounded">
              <Image
                src={imageUrl}
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
        </section>

        <div className="flex justify-end mt-2 pb-10">
          <FeedPagination />
        </div>
      </div>
    </div>
  );
}
