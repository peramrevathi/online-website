

import React from "react";
import { Link } from "react-router-dom";
import { useCart} from "../context/CartContext";

const Navbar = () => { 
      const {cartItems} = useCart()
  return (
    <>
    <div className="navSection">
  <div className="title"> 
    <h2>Shopping</h2>
  </div>
 

        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user">
          <Link to='/signIn'>
          <div className="user-detail">
            SignIN/SignUp
        </div>
        </Link>
        <Link to ='/cart'>
          <div className="cart">Cart
            <span>{cartItems.length}</span>
          </div>
          </Link>
     </div >
     </div>
     <div className="subMenu">
        <ul>
          <Link to='/mobiles'>
         <li>Mobiles</li>
         </Link>
         <Link to='/cosmetics'>
         <li>Cosmetics</li>
         </Link>
         <Link to='/women'>
         <li>Women Wear</li>
         </Link>
         <Link to='/menwear'>
         <li>Men Wear</li>
         </Link>
         <Link to='/watch'>
         <li>Watch</li>
         </Link>
         <Link to='/books'>
         <li>Books</li>
         </Link>
         <Link to='/kitchen'>
         <li>Kitchen</li>
         </Link>
         <Link to='/toys'>
         <li>Toys</li>
         </Link>
         <Link to='/bags'>
         <li>Bags</li>
         </Link>
         <Link to='/groceries'>      
            <li>Groceries</li>
        </Link>
        <Link to='/pharmacy'>
         <li>Pharmacy</li>
         </Link>
        

        </ul>

     </div>
    </>
  );
};

export default Navbar;