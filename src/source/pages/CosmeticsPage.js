import React , {useState}from 'react'
import { cosmeticsData } from '../data/cosmetics'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const CosmeticsPage = () => {
  const [selectedProduct, setSelectedProduct] =useState([])

  const companyHandler=(a)=>{
   if(selectedProduct.includes(a)){
    setSelectedProduct(selectedProduct.filter(item => item !== a))
   }else{
      setSelectedProduct([...selectedProduct,a])
   }
  }
    const filteredProduct =selectedProduct.length===0?
    cosmeticsData : cosmeticsData.filter((b)=>selectedProduct.includes(b.brand))




  return (
    <>
    <Navbar/>
    <div className='fullpage'>
    <div className='pro-selected'>
      {cosmeticsData.map((cosmetics)=>{
      return(
        <div className ='pro-input'>
          <label>
            <input type='checkbox'
             checked = {selectedProduct.includes(cosmetics.brand)}
             onChange={()=>companyHandler(cosmetics.brand)}
             />
             {cosmetics.brand}
          </label>
        </div>


      )
} )}
    </div>



    <div className='pageSection'>
        {filteredProduct.map((item)=>{
          return(
            <div>
               <Link to={`/cosmetics/${item.id}`} >
                <div className='pageImg'>
                    <img src={item.image} alt=""/>
                </div>
                </Link>
                <div className="proModel">
                    {item.brand},{item.price}
                    </div>
            </div>
          )
       } )}
    </div>
    </div>
    </>
  )
}

export default CosmeticsPage