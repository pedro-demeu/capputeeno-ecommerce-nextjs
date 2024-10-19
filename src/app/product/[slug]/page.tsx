"use client"; // Garantir que é client-side

import { useState, useEffect } from "react";
import ProductView from "@/app/components/product/ProductView";
import { Product } from "@/app/types/product";
import { useParams } from "next/navigation";

function ProductViewPage() {
  const { slug } = useParams(); // Obtém o slug da URL
  const [product, setProduct] = useState<Product | null>(null); // Estado para armazenar o produto
  const [loading, setLoading] = useState(true); // Estado para o carregamento

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3001/products/${slug}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct(); // Apenas busca se o slug existir
    }
  }, [slug]); // Atualiza sempre que o slug mudar

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return <ProductView product={product} />;
}

export default ProductViewPage;
