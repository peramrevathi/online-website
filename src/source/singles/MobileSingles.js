import React from 'react'
import { mobileData } from '../data/mobiles'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useCart } from "../context/CartContext"

const MobileSingles = () => {
  
    const{id} = useParams()
    const{addToCart} =useCart()
   

    const product = mobileData.find((item)=>item.id === id)


    return (
    <>
    <Navbar/>
    <div className='ind-section'>
        <div className='ind-image'>
            <img src={product.image} alt=""/>
        </div>
       <div className='ind-details space'>
       <div className='ind-company space'>
            <h3>{product.company}</h3>
        </div>
        <div className='ind-model space'>
            <h3>{product.model}</h3>
        </div>
        <div className='ind-price space'>
            <h3>{product.price}</h3>
        </div>
        <div className='ind-desc space'>
            <p>{product.description}</p>
        </div>
        <button onClick={()=>addToCart(product)}>Add to Cart</button>
       </div>


    </div>
    </>
  )
}

export default MobileSingles