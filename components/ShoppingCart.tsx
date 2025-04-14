import { Drawer, List} from "@mui/material";
import useShoppingCart from "../context/ShoppingCartContext";

import FormatCurrency from "../utilities/FormatCurrency";
import storeItems from "../data/items.json"
import CartItem from "./CartItem";

type ShoppingCartProps = {
    isOpen: boolean
}

export default function ShoppingCart({isOpen}: ShoppingCartProps) {
  const {closeCart, cartItems} = useShoppingCart()

  const list = (
    <List sx={{ width: 350 }}>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="mt-5">
        Total {FormatCurrency(cartItems.reduce((total, cartItems) => {
        const item = storeItems.find(i => i.id === cartItems.id)
        return total + (item?.price || 0) * cartItems.quantity
     },0)
     )}
      </div>
    </List>
  );


  return (
    <Drawer sx={{width:300}} anchor="right" open={isOpen} onClose={closeCart}>
      {list}
    </Drawer>
  );
}
