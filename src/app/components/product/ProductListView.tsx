import TryAgainButton from "../common/TryAgainButton";
import ProductList from "./ProductList";

async function ProductListView() {
  let products = null;
  let error = null;

  try {
    const response = await fetch("http://localhost:3001/products");
    if (!response.ok) {
      throw new Error("Failed to fetch the products");
    }

    const productAsString = await response.text();

    if (productAsString) {
      products = JSON.parse(productAsString);
    } else {
      throw new Error("Empty response from server");
    }
  } catch (e) {
    error = (e as Error).message;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-10 h-[100vh]">
        <div>Produtos Indisponíveis: {error}</div>
        <TryAgainButton />
      </div>
    );
  }

  if (!products) return <h1>Sem produtos cadastrados</h1>;

  return <ProductList products={products} />;
}

export default ProductListView;
