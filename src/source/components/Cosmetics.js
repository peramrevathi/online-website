import React from 'react'
import { cosmeticsData } from '../data/cosmetics'

const Cosmetics = () => {
    const firstFiveImages = cosmeticsData.slice(0,5)
  return (
    <>
    <div className="proTitle">
    <h2> Cosmetics</h2>
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

export default Cosmetics