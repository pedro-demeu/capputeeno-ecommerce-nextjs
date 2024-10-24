import BackButton from "@/app/components/common/BackButton";
import ProductView from "@/app/components/product/ProductView";

interface Params {
  slug: string; // Define que o parâmetro 'id' é uma string
}

async function ProductViewPage({ params }: { params: Params }) {
  const { slug } = params;
  let product = null;
  let error = null;

  console.log({
    params,
  })
  try {
    const response = await fetch(`http://localhost:3001/products/${slug}`);

    console.log({
      response,
    })
    if (!response.ok) {
      throw new Error("Failed to fetch the product");
    }

    const productAsString = await response.text();
    if (productAsString) {
      product = JSON.parse(productAsString);
    } else {
      throw new Error("Empty response from server");
    }
    
  } catch (err) {
    error = (err as Error).message;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-10 h-[100vh]">
        <div>Produto Indisponível: {error}</div>
        <BackButton />
      </div>
    );
  }

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return <ProductView product={product} />;
}

export default ProductViewPage;
