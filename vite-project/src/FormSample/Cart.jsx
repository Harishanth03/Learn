import { useState } from "react"

export const Cart = () => {

  const [cartCount , setCartCount] = useState(0);

  let handleClick = () => (setCartCount(cartCount + 1))
  return (

    <>
      <h1>Number of Items in the cart: {cartCount}</h1>

      <button onClick={handleClick}>Add to cart</button>
    </>

  )

}
