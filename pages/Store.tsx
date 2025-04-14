
import storeItems from "../data/items.json"
import StoreItem from "../components/StoreItem"


import useShoppingCart from "../context/ShoppingCartContext"
import { LuShoppingCart } from "react-icons/lu"

export default function Store() {
  
  const {openCart, cartQuantity} = useShoppingCart()

  return (
    <div className=" text-center ">
      <div className="text-4xl">
      {cartQuantity > 0 && (
        <button onClick={openCart}>
          <LuShoppingCart />
          <span className="absolute top-4 text-xs bg-amber-500 text-white rounded-lg px-2 py-1 ">
            {cartQuantity}
          </span>
        </button>
      )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 p-5
      gap-3">
        {storeItems.map(item => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}
