import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("CartItem ", cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-xl">Cart</h1>
      <div className="w-6/12 m-auto ">
      <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length === 0 && (<h1 className="flex flex-col items-center"><h1>Cart empty. </h1><button className="w-3/12 p-2 m-2 bg-slate-600 text-white rounded-lg"><Link to="/">Add items</Link></button></h1>)}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
