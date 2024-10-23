import { useProductCartStore } from "@/app/_store/cartStore";
import Image from "next/image";
import DeleteIcon from "@/icons/delete.svg";

function ProductDeleteButton({ id }: { id: number }) {
  const { removeProduct } = useProductCartStore();

  return (
    <button onClick={() => removeProduct(id)}>
      <Image src={DeleteIcon} alt="delete" width={24} height={24} />
    </button>
  );
}

export default ProductDeleteButton;