import Image from "next/image";
import BackIcon from "@/icons/back.svg";

function BackButton() {
  return (
    <button className="flex items-center gap-2 my-8">
      <Image src={BackIcon} alt="Clique para voltar" width={24} height={24} />
      <p>Voltar</p>
    </button>
  );
}
export default BackButton;
