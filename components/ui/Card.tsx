export default function Card(props) {
  let cardsData = props.data;
  return (
    <div className="w-72   flex justify-between flex-col bg-black border-solid shadow-lg">
      <img src={cardsData.images[0]} alt="Test" className="w-full h-64 " />
      <div className="text-white flex flex-col pl-5 h-32 gap-5">
        <h2 className="text-3xl">{cardsData.title}</h2>
        {/* <p>{props.data.description}</p> */}
        <p className=" text-lg align-bottom">{cardsData.price}$</p>
      </div>
      <hr />
      <button className="text-white text-2xl pb-5  bg-black">Купить</button>
    </div>
  );
}
