import CartButton from "@/components/ui/buttons/CartButton";
import Search from "./ui/Search";
import Catalog from "./ui/Catalog";

const Logo = () => {
  return (
    <button className="font-sans font-extrabold text-3xl">Shopster</button>
  );
};

const List = () => {
  return (
    <ul className="flex flex-row gap-3 text-m cursor-pointer">
      <li>О нас</li>
      <li>Контакты</li>
    </ul>
  );
};

export default function Header() {
  return (
    <div className="flex justify-between pl-20 pr-20 h-16 items-center container  cursor-default  bg-black text-white  backdrop mx-auto drop-shadow-xl">
      <Logo />
      <div className="w-72 flex justify-center">
        <Catalog />
      </div>
      <Search />
      <div className="w-56 flex justify-center">
        <CartButton />
      </div>
    </div>
  );
}
