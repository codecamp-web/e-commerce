import useShoppingCart from "../context/ShoppingCartContext"
import FormatCurrency from "../utilities/FormatCurrency"


type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}


export default function StoreItem({id, name, price, imgUrl} : StoreItemProps){
    const {
            getItemQuantity, 
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart
        } = useShoppingCart()

        const quantity = getItemQuantity(id)


    return (
        <div className="text-center">
           
          <img src={imgUrl} />
            {name} {" "} <span className="text-green-700">{FormatCurrency(price)}</span>
            <div>
                {quantity === 0 ? (
                    <button className="bg-blue-500 p-3 rounded-lg"
                     onClick={() => increaseCartQuantity(id)}>Add to Cart</button>
                ):(
                    <div>
                        <div >
                            <button onClick={() => decreaseCartQuantity(id)}
                            className="mr-2  bg-red-700  rounded-md px-2 py-1"> - </button>
                                <span className="text-lg">{quantity} in cart</span>
                            <button onClick={() => increaseCartQuantity(id)}
                             className="ml-2 bg-green-800  rounded-md px-2 py-1">+</button>
                        </div>
                        <button onClick={() => removeFromCart(id)}
                        className="bg-red-700 p-2 text-sm rounded-md">Remove</button>
                    </div>
                )}
            </div>
        </div>
  )
}
