import { CDN_URL } from "../utils/constant";

const ItemList = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 text-left">
              <span>{item?.card?.info?.name}</span>{" "}
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-6">
            <div className="absolute">
              <button className="mx-8 rounded-lg p-2 bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-md w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
