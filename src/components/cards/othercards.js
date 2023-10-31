import React from 'react'
import "./card.css"

const OtherCard = ({img, type, price, desc}) => {
  return (
    <div className="popCardContainer">
        <div className='popCardImgContainer'>
            <img src={img} alt="?" className='popCardImg'/>
        </div>
        <div className=''>
            <h3>{type}</h3>
            <span>{desc}</span>
        </div>
        <div className='popPriceContainer'>
        
            <h5><span>&#8358;</span> {Intl.NumberFormat(undefined, ).format(price)}</h5>
        </div>
    </div>
  )
}

export default OtherCard