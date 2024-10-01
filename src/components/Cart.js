import { useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import Itemslist from "./ItemsList";
import { useDispatch } from "react-redux";

const Cart = () => {

    //ALways subscrible to smaller portion of store which is required otherwise entire store will be perpormance loss
  const cartItems = useSelector((store) => store.cart.dishes);

  console.log(cartItems);
  //reducer is in main store and reducers is in slice

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
        <Itemslist items={cartItems} />
      </div>
    </div>
  );

};

export default Cart;