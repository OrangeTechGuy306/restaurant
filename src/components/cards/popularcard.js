import React from 'react'
import "./card.css"


const PopularCard = ({img, type, op1, op2, op3, op4, price, desc}) => {
  return (
    <div className="popCardContainer">
        <div className='popCardImgContainer'>
            <img src={img} alt="?" className='popCardImg'/>
        </div>
        <div className=''>
            <h3>{type}</h3>
            <ul>
                <li>{op1}</li>
                <li>{op2}</li>
                <li>{op3}</li>
                <li>{op4}</li>
            </ul>
            <span>{desc}</span>
        </div>
        <div className='popPriceContainer'>
        
            <h5><span>&#8358;</span> {Intl.NumberFormat(undefined, ).format(price)}</h5>
        </div>
    </div>
  )
}

export default PopularCard