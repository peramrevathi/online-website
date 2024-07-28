import React , {useState}from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const WatchPage = () => {
  const [selectedProduct, setSelectedProduct] =useState([])

  const companyHandler=(a)=>{
   if(selectedProduct.includes(a)){
    setSelectedProduct(selectedProduct.filter(item => item !== a))
   }else{
      setSelectedProduct([...selectedProduct,a])
   }
  }
    const filteredProduct =selectedProduct.length===0?
     watchData : watchData.filter((b)=>selectedProduct.includes(b.brand))




  return (
    <>
    <Navbar/>
    <div className='fullpage'>
    <div className='pro-selected'>
      {watchData.map((watch)=>{
      return(
        <div className ='pro-input'>
          <label>
            <input type='checkbox'
             checked = {selectedProduct.includes(watch.brand)}
             onChange={()=>companyHandler(watch.brand)}
             />
             {watch.brand}
          </label>
        </div>


      )
} )}
    </div>



    <div className='pageSection'>
        {filteredProduct.map((item)=>{
          return(
            <div>
               <Link to={`/watch/${item.id}`} >
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

export default WatchPage