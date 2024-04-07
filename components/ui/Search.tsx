import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <div className="flex justify-end relative align-middle z-0 w-1/2 md:w-1/2">
      {/* {CiSearch && (
        <div className="absolute mt-1 ">{<CiSearch color="black" />}</div>
      )} */}
      <input className="bg-white h-6 w-full px-5 border-solid text-gray-700 rounded-l-lg   text-black"></input>
      <div className="bg-white border-solid border-2 w-1/12 h-6 rounded-r-lg self-center  flex justify-center">
        <CiSearch className="self-center" color="black" />
      </div>
    </div>
  );
}
