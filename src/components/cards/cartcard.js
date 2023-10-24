import React from 'react'

const Cartcard = ({img, title}) => {
  return (
    <div className="catCard">
        <img src={img} alt="" className="catImg"/>
        <h3>{title}</h3>
    </div>
  )
}

export default Cartcard