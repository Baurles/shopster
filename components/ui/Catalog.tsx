import { useState } from "react";
import { FaList } from "react-icons/fa";
import CatalogModal from "./modal/CatalogModal";

export default function Catalog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  if (isModalOpen) {
    return <CatalogModal handleModal={handleModal} />;
  }

  return (
    <div
      onClick={handleModal}
      className="flex justify-center  align-bottom gap-2 p-1 border-solid cursor-pointer border-2 rounded-lg  "
    >
      <FaList />
      <span className="text-sm ">Каталог</span>
    </div>
  );
}
