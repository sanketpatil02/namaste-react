import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;

  //   const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };
  // console.log("Res ", data.itemCards);

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "🔼" : "🔽"}</span>
      </div>

      {/* accordian body */}

      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};
export default RestaurantCategory;
