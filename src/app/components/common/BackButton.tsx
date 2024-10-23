"use client";

import Image from "next/image";
import BackIcon from "@/icons/back.svg";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button
      className="flex items-center gap-2"
      onClick={() => {
        router.push("/");
      }}
    >
      <Image src={BackIcon} alt="Clique para voltar" width={24} height={24} />
      <p>Voltar</p>
    </button>
  );
}
export default BackButton;
