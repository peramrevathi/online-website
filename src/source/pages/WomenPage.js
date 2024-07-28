import React,{useState} from 'react'
import { womenData } from '../data/women'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const WomenPage = () => {

    const [selectedProduct, setSelectedProduct] =useState([])
  
    const companyHandler=(a)=>{
     if(selectedProduct.includes(a)){
      setSelectedProduct(selectedProduct.filter(item => item !== a))
     }else{
        setSelectedProduct([...selectedProduct,a])
     }
    }
      const filteredProduct =selectedProduct.length===0?
       womenData :womenData.filter((b)=>selectedProduct.includes(b.brand))
  

  return (
    <>
    <Navbar/>
    <div className='fullpage'>
    <div className='pro-selected'>
      {womenData.map((dress)=>{
      return(
        <div className ='pro-input'>
          <label>
            <input type='checkbox'
             checked = {selectedProduct.includes(dress.brand)}
             onChange={()=>companyHandler(dress.brand)}
             />
             {dress.brand}
          </label>
        </div>


      )
} )}
    </div>
    <div className='pageSection'>
        {filteredProduct.map((item)=>{
          return(
            <div>
              <Link to={`/women/${item.id}`} >
                <div className='pageImg'>
                    <img src={item.image} alt=""/>
                </div>
                </Link>
                <div className="proModel">
                    {item.type},{item.brand}
                    </div>
            </div>
          )
       } )}
    </div>
    </div>
    </>
  )
}

export default WomenPage