import Card from "./Card";
import Search from "./Search";
import Filter from "./Filter";

export default function ItemsLayout(props) {
  let data = props.data;
  return (
    <div className="m-auto mt-20 shadow-xl bg-gray-200">

      <div className="grid mt-20 justify-center grid-cols-5 gap-5 ">
        {data.map((items) => (
          <Card
            key={Math.floor(Math.random() * (100000 - 1 + 1)) + 1}
            data={items}
          />
        ))}
      F</div>
    </div>
  );
}
