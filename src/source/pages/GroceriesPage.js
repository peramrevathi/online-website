import React , {useState}from 'react'
import { groceriesData } from '../data/groceries'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const GroceriesPage = () => {
  const [selectedProduct, setSelectedProduct] =useState([])

  const companyHandler=(a)=>{
   if(selectedProduct.includes(a)){
    setSelectedProduct(selectedProduct.filter(item => item !== a))
   }else{
      setSelectedProduct([...selectedProduct,a])
   }
  }
    const filteredProduct =selectedProduct.length===0?
    groceriesData : groceriesData.filter((b)=>selectedProduct.includes(b.brand))




  return (
    <>
    <Navbar/>
    <div className='fullpage'>
    <div className='pro-selected'>
      {groceriesData.map((groceries)=>{
      return(
        <div className ='pro-input'>
          <label>
            <input type='checkbox'
             checked = {selectedProduct.includes(groceries.brand)}
             onChange={()=>companyHandler(groceries.brand)}
             />
             {groceries.brand}
          </label>
        </div>


      )
} )}
    </div>



    <div className='pageSection'>
        {filteredProduct.map((item)=>{
          return(
            <div>
               <Link to={`/groceries/${item.id}`} >
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

export default GroceriesPage