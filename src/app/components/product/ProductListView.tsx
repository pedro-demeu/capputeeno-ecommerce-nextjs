import { Product } from "@/app/types/product";
import ProductList from "./ProductList";

async function getProducts() {
  const res = await fetch("http://localhost:3001/products");
  const data = await res.json();
  return data;
}

async function ProductListView() {
  const products: Product[] = await getProducts();

  return <ProductList products={products} />;
}



export default ProductListView;
