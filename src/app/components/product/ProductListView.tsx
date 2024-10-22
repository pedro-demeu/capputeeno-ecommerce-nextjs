import { Product } from "@/app/types/product";
import ProductList from "./ProductList";

async function getProducts() {
  try {
    const res = await fetch("http://localhost:3001/products");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function ProductListView() {
  const products: Product[] = await getProducts();

  if (!products) return <h1>Dados indisponíveis</h1>;
  return <ProductList products={products} />;
}

export default ProductListView;
