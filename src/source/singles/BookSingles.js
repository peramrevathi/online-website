import React from 'react'
import { booksData} from '../data/books'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useCart } from '../context/CartContext'
const BookSingles = () => {
  
    const{id} = useParams()
    const{addToCart} =useCart()

    const product = booksData.find((item)=>item.id === id)


    return (
    <>
    <Navbar/>
    <div className='ind-section'>
        <div className='ind-image'>
            <img src={product.image} alt=""/>
        </div>
       <div className='ind-details space'>
       <div className='ind-title space'>
            <h3>{product.title}</h3>
        </div>
        <div className='ind-Author space'>
            <h3>{product.Author}</h3>
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

export default BookSingles