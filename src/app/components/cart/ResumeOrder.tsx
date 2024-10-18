
function ResumeOrder() {
  return (
    <div className="bg-white px-4 w-full mt-40">
      <h2 className="text-2xl">Resumo do Pedido</h2>

      <div className="my-2 flex justify-between text-gray-500">
        <p>Subtotal de produtos</p>
        <p>R$ 150,00</p>
      </div>

      <div className="my-2 flex justify-between text-gray-500">
        <p>Entrega</p>
        <p>R$ 50,00</p>
      </div>

      <div className="w-full border bg-slate-300" />
      <div className="my-2 flex justify-between text-gray-500">
        <p>Total</p>
        <p>R$ 200,00</p>
      </div>

      <button className="bg-green-600 text-white rounded w-full py-2 mb-6">Finalizar a compra</button>

      
    </div>
  );
}

export default ResumeOrder;
