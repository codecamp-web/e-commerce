
import {Box,Button,ListItem,ListItemText} from "@mui/material"
import useShoppingCart from "../context/ShoppingCartContext"
import storeItems from '../data/items.json'
import FormatCurrency from "../utilities/FormatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export default function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

  return (
     <>
        <div className="flex gap-x-10 items-center">
         <div className="mt-3">
         <img src={item.imgUrl} className="w-[200px]" />
         </div>
         <div className="flex flex-col">
            <p>
             {item.name} {quantity > 1 && <span>x{quantity}</span>}
            </p>
            {FormatCurrency(item.price)}
            <p className="text-green-800">
                {FormatCurrency(item.price * quantity)}
            </p>
            <button onClick={() => removeFromCart(item.id)}
             className="mt-10 bg-red-500 p-2 rounded-md">
                remove
            </button>
         </div>
        </div>
     </>
  )
}
