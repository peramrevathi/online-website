import {  createContext, useContext,useState } from "react";
 
 export const CartContext = createContext()

 export const CartProvider = ({children})=>{
  const [ cartItems, setCartItems ] = useState([])

  const addToCart =(item)=>{
    setCartItems([...cartItems, item])
  }

  const removeFromCart = (item)=>{
    setCartItems(cartItems.filter((y)=>y!==item))
  }
return(
  <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
  {children}
  </CartContext.Provider>
)


}
 
export const useCart = ()=>{
  return useContext(CartContext)
}





