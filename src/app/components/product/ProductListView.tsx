"use client"
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Product } from "@/app/types/product";

function ProductListView() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:3001/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Erro ao carregar os produtos:", err);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <h1>Carregando...</h1>;
  if (!products) return <h1>Dados indisponíveis</h1>;

  return <ProductList products={products} />;
}

export default ProductListView;
