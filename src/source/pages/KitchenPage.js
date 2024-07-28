import React , {useState}from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const KitchenPage = () => {
  const [selectedProduct, setSelectedProduct] =useState([])

  const companyHandler=(a)=>{
   if(selectedProduct.includes(a)){
    setSelectedProduct(selectedProduct.filter(item => item !== a))
   }else{
      setSelectedProduct([...selectedProduct,a])
   }
  }
    const filteredProduct =selectedProduct.length===0?
    kitchenData : kitchenData.filter((b)=>selectedProduct.includes(b.brand))




  return (
    <>
    <Navbar/>
    <div className='fullpage'>
    <div className='pro-selected'>
      {kitchenData.map((kitchen)=>{
      return(
        <div className ='pro-input'>
          <label>
            <input type='checkbox'
             checked = {selectedProduct.includes(kitchen.brand)}
             onChange={()=>companyHandler(kitchen.brand)}
             />
             {kitchen.brand}
          </label>
        </div>


      )
} )}
    </div>



    <div className='pageSection'>
        {filteredProduct.map((item)=>{
          return(
            <div>
               <Link to={`/kitchen/${item.id}`} >
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

export default KitchenPage