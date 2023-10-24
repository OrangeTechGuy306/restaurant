import React from 'react'
import "./card.css"

const OtherCards = ({img, title, price}) => {
  return (
    <div className='otherCardContainer'>
        <div className='otherCardImgContainer'>
            <img src={img} alt='' className='otherCardImg'/>
        </div>
        <div className='otherCardInfo'>
            <h3>{title}</h3>
            <h4>
            <span>&#8358; </span>{Intl.NumberFormat(undefined).format(price)}
            </h4>
        </div>
    </div>
  )
}

export default OtherCards