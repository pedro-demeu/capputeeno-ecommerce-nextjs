import HeaderBar from "@/app/components/layout/HeaderBar";
import CartProductList from "../components/cart/CartProductList";
import BackButton from "../components/common/BackButton";

function CartViewPage() {
  return (
    <div className="bg-[#F3F5F6]">
      <HeaderBar />

      <div className="w-9/12 mx-auto flex flex-col justify-between items-start gap-3">
        <div className="my-6 block">
          <BackButton />
        </div>
        <CartProductList />
      </div>
    </div>
  );
}

export default CartViewPage;
