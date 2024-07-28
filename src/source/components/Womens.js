import React from 'react'
import { womenData } from '../data/women'
const Womens = () => {
    const firstFiveImages = womenData.slice(0,5)
  return (
    <>
    <div className="proTitle">
    <h2>Womens Wear</h2>
    </div>
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img  className='proImage' src={item.image} alt=""/>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Womens