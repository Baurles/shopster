export default function CartModal({ handleModal }) {
  return (
    <div
      onClick={handleModal}
      className="w-52 h-96 mt-96 rounded-lg bg-white z-10"
    >
      <div className="text-black flex flex-col justify-between w-full h-full">
        <div className="flex flex-col  justify-between ">
          <span className="border-solid border-black border-b-2 font-bold self-center">
            Корзина
          </span>
          <div className="flex w-full gap-1 pl-2 pr-2  flex-col mt-2 self-center">
            <div className="w-full border-solid border-black border-2 p-2 ">
              <div className="w-full flex justify-start h-full">
                <div className="w-1/4 h-full ">К</div>
                <div className="flex flex-col ml-2 text-xs">
                  <span>Название</span>
                  <span>Цена</span>
                </div>
              </div>
            </div>
            <div className="w-full border-solid border-black border-2 p-2 ">
              <div className="w-full flex justify-start h-full">
                <div className="w-1/4 h-full ">К</div>
                <div className="flex flex-col ml-2 text-xs">
                  <span>Название</span>
                  <span>Цена</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center flex justify-center pb-2 w-full pt-2 rounded-b-lg bg-black">
          <span className="text-white">Оформить</span>
        </div>
      </div>
    </div>
  );
}
