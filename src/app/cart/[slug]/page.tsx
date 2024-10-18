import HeaderBar from "@/app/components/layout/HeaderBar";
import CartDetails from "@/app/components/cart/CartDetails";
import ResumeOrder from "@/app/components/cart/ResumeOrder";
import BackButton from "@/app/components/common/BackButton";

function CartViewPage() {
  //   const mock = {
  //     id: 1,
  //     type: "Caneca",
  //     title: "Caneca de cerâmica rústica",
  //     price: 40.0,
  //     description:
  //       "Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
  //   };
  return (
    <div className="bg-[#F3F5F6]">
      <HeaderBar />
      <div className="w-9/12 mx-auto flex justify-between items-start gap-10">
        <CartDetails />
        <ResumeOrder />
      </div>
    </div>
  );
}

export default CartViewPage;
