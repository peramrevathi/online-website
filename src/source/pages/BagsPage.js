import React , {useState}from 'react'
import { bagsData } from '../data/bags'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const BagsPage = () => {
  const [selectedProduct, setSelectedProduct] =useState([])

  const companyHandler=(a)=>{
   if(selectedProduct.includes(a)){
    setSelectedProduct(selectedProduct.filter(item => item !== a))
   }else{
      setSelectedProduct([...selectedProduct,a])
   }
  }
    const filteredProduct =selectedProduct.length===0?
     bagsData : bagsData.filter((b)=>selectedProduct.includes(b.brand))




  return (
    <>
    <Navbar/>
    <div className='fullpage'>
    <div className='pro-selected'>
      {bagsData.map((bag)=>{
      return(
        <div className ='pro-input'>
          <label>
            <input type='checkbox'
             checked = {selectedProduct.includes(bag.brand)}
             onChange={()=>companyHandler(bag.brand)}
             />
             {bag.brand}
          </label>
        </div>


      )
} )}
    </div>



    <div className='pageSection'>
        {filteredProduct.map((item)=>{
          return(
            <div>
               <Link to={`/bags/${item.id}`} >
                <div className='pageImg'>
                    <img src={item.image} alt=""/>
                </div>
                </Link>
                <div className="proModel">
                    {item.brand},{item.model}
                    </div>
            </div>
          )
       } )}
    </div>
    </div>
    </>
  )
}

export default BagsPage