"use client"
import { useSelectOrdenation } from "@/_store/selectOrdenationStore";
import { Ordenation } from "@/app/types/ordenation";
import { ChangeEvent } from "react";

const SelectOption = ({ value, label }: { value: string; label: string }) => {
  return <option value={value}>{label}</option>;
};

const SelectOrdenation = () => {
  const { selectedValue, setSelectedValue } = useSelectOrdenation();

  const options = [
    { value: "", label: "Organizar por" },
    { value: "newest", label: "Novidades" },
    { value: "price_desc", label: "Preço: Maior - menor" },
    { value: "price_asc", label: "Preço: Menor - maior" },
    { value: "best_sellers", label: "Mais vendidos" },
  ];

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value as Ordenation); // Atualiza o estado com o valor selecionado
  };

  return (
    <select
      className="rounded-md px-4 bg-transparent text-gray-500 font-light"
      value={selectedValue}
      onChange={handleSelectChange}
    >
      {options.map(({ value, label }) => (
        <SelectOption key={value} value={value} label={label} />
      ))}
    </select>
  );
};

export default SelectOrdenation;
