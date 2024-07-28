import React , {useState}from 'react'
import { toysData } from '../data/toys'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const ToysPage = () => {
  const [selectedProduct, setSelectedProduct] =useState([])

  const companyHandler=(a)=>{
   if(selectedProduct.includes(a)){
    setSelectedProduct(selectedProduct.filter(item => item !== a))
   }else{
      setSelectedProduct([...selectedProduct,a])
   }
  }
    const filteredProduct =selectedProduct.length===0?
    toysData : toysData.filter((b)=>selectedProduct.includes(b.brand))




  return (
    <>
    <Navbar/>
    <div className='fullpage'>
    <div className='pro-selected'>
      {toysData.map((toys)=>{
      return(
        <div className ='pro-input'>
          <label>
            <input type='checkbox'
             checked = {selectedProduct.includes(toys.brand)}
             onChange={()=>companyHandler(toys.brand)}
             />
             {toys.brand}
          </label>
        </div>


      )
} )}
    </div>



    <div className='pageSection'>
        {filteredProduct.map((item)=>{
          return(
            <div>
               <Link to={`/toys/${item.id}`} >
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

export default ToysPage