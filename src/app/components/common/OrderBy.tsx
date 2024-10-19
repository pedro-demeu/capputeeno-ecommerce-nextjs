function OrderBy() {
  return (
    <select className="rounded-md px-4 bg-transparent text-gray-500 font-light">
      <option>Organizar por</option>
      <option>Novidades</option>
      <option>Preço: Maior - menor</option>
      <option>Preço: Menor - maior</option>
      <option>Mais vendidos</option>
    </select>
  );
}

export default OrderBy;
