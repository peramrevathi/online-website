import React from 'react'
import { watchData } from '../data/watch'

const Watch = () => {

    const firstFiveImages = watchData.slice(0,5)
  return (
    <div>
         <>
         <div className="proTitle">
    <h2>Watch</h2>
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
    </div>
  )
}

export default Watch