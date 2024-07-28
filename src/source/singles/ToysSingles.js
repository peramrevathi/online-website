import React from 'react'
import { toysData} from '../data/toys'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useCart } from '../context/CartContext'
const ToysSingles = () => {
  
    const{id} = useParams()
    const{addToCart} =useCart()
   
    const product = toysData.find((item)=>item.id === id)


    return (
    <>
    <Navbar/>
    <div className='ind-section'>
        <div className='ind-image'>
            <img src={product.image} alt=""/>
        </div>
       <div className='ind-details space'>
       <div className='ind-type space'>
            <h3>{product.type}</h3>
        </div>
        <div className='ind-brand space'>
            <h3>{product.brand}</h3>
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

export default ToysSingles