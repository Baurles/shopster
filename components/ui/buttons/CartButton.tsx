import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import CartModal from "../modal/CartModal";

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  if (isOpen) {
    return <CartModal handleModal={handleModal} />;
  } else {
    return (
      <button
        onClick={handleModal}
        className="bg-white box-border border-solid flex justify-center  items-center w-20 h-8 rounded-full text-black text-m hover:rounded-lg"
      >
        <GiShoppingCart />
      </button>
    );
  }
}
