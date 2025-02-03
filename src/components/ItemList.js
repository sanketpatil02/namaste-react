import { useDispatch } from "react-redux";
import { CDN_URL, DEFAULT_IMG } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { DEFAULT_IMG } from "../utils/constant";

const ItemList = ({ items, cartItems }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 text-left">
              <span>{item?.card?.info?.name}</span>{" "}
              <span>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12 p-6">
            <div className="absolute">
              <button
                className="mx-8 rounded-lg p-2 bg-black text-white shadow-lg"
                onClick={() => handleAddToCart(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={
                item?.card?.info?.imageId
                  ? CDN_URL + item?.card?.info?.imageId
                  : { DEFAULT_IMG }
              }
              className="rounded-md w-full"
              // alt={item?.card?.info?.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
